import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";
import qs from 'querystring';
import { posts } from "@prisma/client";
import authenticateRoute from '@/lib/authenticateRoute';
   
export async function POST(req: NextRequest) {
    const auth = await authenticateRoute().catch(() => ({ "error": "an error occurred during authentication"}));
    if (auth) return NextResponse.json(auth, { status: 401 });

    let { postId, post_name, post_content, post_description, posted_by } = qs.parse(await req.text());
    if (!postId || !post_name || !post_description || !post_content || !posted_by) return NextResponse.json({ "error": "You need to specify a postId, post_name, post_description, post_content, and posted_by!" }, { status: 400 });
    
    const postIsNull = await prisma.posts.findFirst({ where: { postId: postId.toString() } }).then((i) => !i ? true : false).catch(() => true);
    if (!postIsNull) return NextResponse.json({ "error": "There is already a post by this postId!" }, { status: 400 });

    const post = {
        postId: postId.toString(),
        post_name: post_name.toString(),
        post_content: post_content?.toString(),
        post_description: post_description?.toString(),
        posted_by: posted_by?.toString(),
        post_date_unix: Date.now(),
        reactions: undefined,
    };

    return prisma.posts.create({ data: post })
        .then((data) => NextResponse.json(data))
        .catch((x) => { 
            console.error(x);
            return NextResponse.json({ "error": "There was an error attempting to create this post!" }, { status: 500 })
        });
}

export async function DELETE(req: NextRequest) {
    const auth = await authenticateRoute().catch(() => ({ "error": "an error occurred during authentication"}));
    if (auth) return NextResponse.json(auth, { status: 401 });

    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("postId");
    if (!postId) return NextResponse.json({ "error": "You need to specify a valid postId!" })
    return prisma.posts.delete({ where: { postId } })
    .then((data) => 
    data ? NextResponse.json(data) :
    NextResponse.json({ "error": "There are no posts with that postId!"}, { status: 404 }))
    .catch((x) => {
        console.error(x);
        return NextResponse.json({ "error": "There was an error attempting to delete posts!"}, { status: 500 });
    })
}
export async function PATCH(req: NextRequest) {
    const auth = await authenticateRoute().catch(() => ({ "error": "an error occurred during authentication"}));
    if (auth) return NextResponse.json(auth, { status: 401 });
    
    const { searchParams } = new URL(req.url);
    const postId_query = searchParams.get("postId");
    if (!postId_query) return NextResponse.json({ "error": "You need to specify a postId in the query parameters!" }, { status: 400 });
    
    const postExists = await prisma.posts.findFirst({ where: { postId: postId_query.toString() } }).then((i) => i).catch(() => false);
    if (!postExists) return NextResponse.json({ "error": "There is no project by this postId!" }, { status: 400 });

    let { postId, post_name, post_content, post_description } = qs.parse(await req.text());
    const post = {
        ...(postId ? { postId: postId.toString() } : {}),
        ...(post_name ? { project_description: post_name.toString() } : {}),
        ...(post_content ? { project_date: post_content.toString() } : {}),
        ...(post_description ? { project_name: post_description.toString() } : {}),
    };
    return prisma.posts.update({ where: { postId: postId_query }, data: { ...post }})
    .then((data) => NextResponse.json(data)).catch((x) => {
        console.error(x);
        return NextResponse.json({ "error": "There was an error attempting to update posts!"}, { status: 500 });
    })

}