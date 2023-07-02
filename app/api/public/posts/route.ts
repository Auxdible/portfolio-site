import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("postId"), limit = searchParams.get("limit");

    return prisma.posts.findMany({ where: { ...( postId ? { postId } : {}) }, ...(Number(limit) ? {take: Number(limit)} : {}), orderBy: { post_date_unix: 'desc' }, select: {
        postId: true,
        post_name: true,
        post_content: true,
        post_date_unix: true,
        post_description: true,
        posted_by: true,
        reactions: true
        } })
    .then((posts) => NextResponse.json(posts))
    .catch((x) => {
        console.log(x);
        return NextResponse.json({ "error": "There was an error attempting to fetch posts!"}, { status: 500 });
    });
}