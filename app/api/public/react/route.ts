import prisma from '@/lib/prisma';
import qs from 'querystring';
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { ReactionType } from '@prisma/client';
import { authOptions } from '../../auth/[...nextauth]/route';

export async function POST(req: NextRequest) {
    const session = await getServerSession(authOptions);

    const { reaction_name, postId } = qs.parse(await req.text());
    if (!postId) return NextResponse.json({ "error": "no postId specified" }, { status: 400 });

    const post = await prisma.posts.findFirst({ where: { postId: postId.toString() }, select: { reactions: true }}).catch(() => undefined);
    if (!post) return NextResponse.json({ "error": "invalid post" }, { status: 400 });

    if (!reaction_name || Object.keys(ReactionType).indexOf(reaction_name.toString()) == -1) return NextResponse.json({ "error": "invalid reaction type" }, { status: 400 });

    const reaction = ReactionType[reaction_name.toString() as keyof typeof ReactionType]
    if (!session?.user?.discord_profile) return NextResponse.json({ "error": "not logged in using Discord" }, { status: 401 });
    let reactions = post.reactions.find((i) => i.type == reaction_name) || undefined;

    if (reactions && reactions.list.indexOf(session.user.discord_profile.id) != -1) reactions.list.splice(reactions.list.indexOf(session.user.discord_profile.id), 1);
    else if (reactions) reactions.list.push(session.user.discord_profile.id);
    else post.reactions.push({ type: reaction, list: [session.user.discord_profile.id] })

    return await prisma.posts.update({ where: { postId: postId.toString() }, data: { reactions: post.reactions.map((i) => ({ type: i.type, list: [...new Set(i.list)] }))}, select: { reactions: true }}).then((data) => {
        return NextResponse.json(data.reactions.find((i) => (i.type == reaction_name)) || {}, { status: 200 });
    }).catch(() => NextResponse.json({ "error": "an error occurred" }, { status: 500 }));
}