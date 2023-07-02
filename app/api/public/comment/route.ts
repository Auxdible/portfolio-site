import qs from 'querystring';
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);

    const { comment_content, postId } = qs.parse(await req.text());
    if (!postId) return NextResponse.json({ "error": "no postId specified" }, { status: 400 });

    const post = await prisma.posts.findFirst({ where: { postId: postId.toString() }, select: { reactions: true }}).catch(() => undefined);
    if (!post) return NextResponse.json({ "error": "invalid post" }, { status: 400 });

    if (!comment_content || comment_content.length > 600) return NextResponse.json({ "error": "invalid comment content" }, { status: 400 });
    if (!session?.user?.discord_profile && !session?.user?.admin) return NextResponse.json({ "error": "not logged in using Discord" }, { status: 401 });
    const count = await prisma.posts.update({ where: { postId: postId.toString() }, data: { comments: { increment: 1 }}, select: { comments: true }}).then((data) => data.comments).catch(() => undefined);
    if (!count) return NextResponse.json({ "error": "an error occurred" }, { status: 500 });
    const comment = await prisma.comments.findFirst({ where: { postId: postId.toString(), commentId: count.toString() }});
    if (comment) return NextResponse.json({ "error": "comment already exists" }, { status: 400 });
    return await prisma.comments.create({ data: { postId: postId.toString(), discord_id: session.user.discord_profile?.id || "ADMIN", commentId: count.toString(), comment_content: comment_content.toString(), post_date_unix: Date.now() }, 
        select: { postId: true, discord_id: true, comment_content: true, commentId: true, post_date_unix: true, }})
        .then((data) => {
            return NextResponse.json(data, { status: 200 });
        }).catch(() => NextResponse.json({ "error": "an error occurred" }, { status: 500 }));
}
export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("postId"), limit = searchParams.get("limit");
    if (!postId) return NextResponse.json({ "error": "no postId specified" }, { status: 400 });

    return prisma.comments.findMany({ where: { ...( postId ? { postId } : {}) }, ...(Number(limit) ? {take: Number(limit)} : {}), orderBy: { post_date_unix: 'desc' }, 
    select: { postId: true, discord_id: true, comment_content: true, commentId: true, post_date_unix: true, }})
    .then((comments) => NextResponse.json(comments))
    .catch((x) => {
        console.log(x);
        return NextResponse.json({ "error": "There was an error attempting to fetch comments!"}, { status: 500 });
    });
}