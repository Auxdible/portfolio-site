import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const discord_id = searchParams.get("discord_id");
    return discord_id == "ADMIN" ? NextResponse.json({ name: process.env.BLOG_DISPLAY_NAME, admin: true }) : prisma.discord_users.findFirst({ where: { ...( discord_id ? { discord_id } : {}) },
    select: { discord_image: true, discord_id: true, discord_name: true }})
    .then((profile) => NextResponse.json({ ...(profile ? { name: profile.discord_name, id: profile.discord_id, image: profile.discord_image, admin: false } : { profile: undefined }) }))
    .catch((x) => {
        console.log(x);
        return NextResponse.json({ "error": "There was an error attempting to fetch that profile!"}, { status: 500 });
    });
}