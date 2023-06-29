import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const project_id = searchParams.get("project_id");

    return prisma.projects.findMany({ where: { ...( project_id ? { project_id } : {}) }, select: { id: false, v: false, 
        project_id: true,
        project_name: true,
        project_date: true,
        project_description: true,
        project_image_url: true,
        project_source_url: true,
        project_website_url: true } })
    .then((projects) => NextResponse.json(projects))
    .catch((x) => {
        console.log(x);
        return NextResponse.json({ "error": "There was an error attempting to fetch projects!"}, { status: 500 });
    });
}