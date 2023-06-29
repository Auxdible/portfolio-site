import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";
import qs from 'querystring';
import { posts } from "@prisma/client";
export function middleware(request: NextRequest) {
    console.log("BINGUS")
    return NextResponse.json({"test": "ok"});
  }
   
export async function POST(req: NextRequest) {
    let { post_id, post_name, post_content, post_description, posted_by } = qs.parse(await req.text());
    if (!post_id || !post_name) return NextResponse.json({ "error": "You need to specify a post_id and post_name!" }, { status: 400 });
    
    const postIsNull = await prisma.posts.findFirst({ where: { post_id: post_id.toString() } }).then((i) => !i ? true : false).catch(() => true);
    if (!postIsNull) return NextResponse.json({ "error": "There is already a post by this post_id!" }, { status: 400 });

    const post = <posts>{
        post_id,
        post_name,
        post_content,
        post_description,
        posted_by,
        post_date_unix: Date.now()
    };

    return prisma.posts.create({ data: post })
        .then((data) => NextResponse.json(data))
        .catch((x) => { 
            console.error(x);
            return NextResponse.json({ "error": "There was an error attempting to create this post!" }, { status: 500 })
        });
}

export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const post_id = searchParams.get("post_id");
    if (!post_id) return NextResponse.json({ "error": "You need to specify a valid post_id!" })
    return prisma.posts.delete({ where: { post_id } })
    .then((data) => 
    data ? NextResponse.json(data) :
    NextResponse.json({ "error": "There are no posts with that post_id!"}, { status: 404 }))
    .catch((x) => {
        console.error(x);
        return NextResponse.json({ "error": "There was an error attempting to delete posts!"}, { status: 500 });
    })
}
export async function PATCH(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const post_id_query = searchParams.get("post_id");
    if (!post_id_query) return NextResponse.json({ "error": "You need to specify a post_id in the query parameters!" }, { status: 400 });
    
    const postExists = await prisma.posts.findFirst({ where: { post_id: post_id_query.toString() } }).then((i) => i).catch(() => false);
    if (!postExists) return NextResponse.json({ "error": "There is no project by this post_id!" }, { status: 400 });

    let { post_id, post_name, post_content, post_description } = qs.parse(await req.text());
    const post = {
        ...(post_id ? { post_id: post_id.toString() } : {}),
        ...(post_name ? { project_description: post_name.toString() } : {}),
        ...(post_content ? { project_date: post_content.toString() } : {}),
        ...(post_description ? { project_name: post_description.toString() } : {}),
    };
    return prisma.posts.update({ where: { post_id: post_id_query }, data: { ...post }})
    .then((data) => NextResponse.json(data)).catch((x) => {
        console.error(x);
        return NextResponse.json({ "error": "There was an error attempting to update posts!"}, { status: 500 });
    })

}