import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";
import authenticateRoute from '@/lib/authenticateRoute';

export async function DELETE(req: NextRequest) {
    const auth = await authenticateRoute().catch(() => ({ "error": "an error occurred during authentication"}));
    if (auth) return NextResponse.json(auth, { status: 401 });

    const { searchParams } = new URL(req.url);
    const postId = searchParams.get("postId"), commentId = searchParams.get("commentId");
    if (!postId || !commentId) return NextResponse.json({ "error": "You need to specify a valid postId & commentId!" })
    return prisma.comments.delete({ where: { postId_commentId: { commentId, postId } } })
    .then((data) => 
    data ? NextResponse.json(data) :
    NextResponse.json({ "error": "There are no posts with that postId & commentId!"}, { status: 404 }))
    .catch((x) => {
        console.error(x);
        return NextResponse.json({ "error": "There was an error attempting to delete comments!"}, { status: 500 });
    })
}
