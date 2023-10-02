import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";
import authenticateRoute from '@/lib/authenticateRoute';
import qs from 'querystring';
import { discord_users } from '@prisma/client';

export async function POST(req: NextRequest) {
    const auth = await authenticateRoute().catch(() => ({ "error": "an error occurred during authentication"}));
    if (auth) return NextResponse.json(auth, { status: 401 });

    const { discord_id, discord_name } = qs.parse(await req.text());
    if (!discord_id && !discord_name) return NextResponse.json({ "error": "You need to specify a valid discord_id OR discord_name!" }, { status: 400 })
    const profile = await prisma.discord_users.findFirst({ where: { discord_id: discord_id?.toString() || undefined, discord_name: discord_name?.toString() || undefined }, select: { discord_id: true, banned: true }}).catch(() => undefined);
    if (!profile) return NextResponse.json({ "error": "invalid discord acc" }, { status: 400 });
    return prisma.discord_users.update({ where: { discord_id: profile.discord_id.toString() }, data: { banned: !profile.banned } })
    .then(async (data: discord_users) => {
        const comments = await prisma.comments.deleteMany({ where: { discord_id: data.discord_id} }).catch(() => undefined)
        return NextResponse.json({data, commentsDeleted: comments?.count || 0 });
    })
    .catch((x) => {
        console.error(x);
        return NextResponse.json({ "error": "There was an error attempting to ban that user!"}, { status: 500 });
    })
}
