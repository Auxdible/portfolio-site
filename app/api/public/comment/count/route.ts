import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("postId");
    if (!postId) return NextResponse.json({ "error": "no postId specified" }, { status: 400 });

    return await prisma.comments.count({ where: { postId }}).then((count) => NextResponse.json({ count }, { status: 200 })).catch(() => NextResponse.json({ "error": "an error occurred" }, { status: 500 }));
}