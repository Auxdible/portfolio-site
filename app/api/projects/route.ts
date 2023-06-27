import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from "next/server";
import qs from 'querystring';
import { projects } from "@prisma/client";
export async function POST(req: NextRequest) {
    let { project_id, project_image_url, project_source_url, project_website_url, project_name, project_date, project_description } = qs.parse(await req.text());
    if (!project_id || !project_name) return NextResponse.json({ "error": "You need to specify a project_id and project_name!" }, { status: 400 });
    
    const projectIsNull = await prisma.projects.findFirst({ where: { project_id: project_id.toString() } }).then((i) => !i ? true : false).catch(() => true);
    if (!projectIsNull) return NextResponse.json({ "error": "There is already a project by this project_id!" }, { status: 400 });

    const project = <projects>{
        project_id,
        project_name,
        project_date,
        project_description,
        project_image_url,
        project_source_url,
        project_website_url
    };

    return prisma.projects.create({ data: project })
        .then((data) => NextResponse.json(data))
        .catch((x) => { 
            console.error(x);
            return NextResponse.json({ "error": "There was an error attempting to create this project!" }, { status: 500 })
        });
}
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
        return NextResponse.json({ "error": "There was an error attempting to fetch those projects!"}, { status: 500 });
    });
}
export async function DELETE(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const project_id = searchParams.get("project_id");
    if (!project_id) return NextResponse.json({ "error": "You need to specify a valid project_id!" })
    return prisma.projects.delete({ where: { project_id } })
    .then((data) => 
    data ? NextResponse.json(data) :
    NextResponse.json({ "error": "There are no projects with that project_id!"}, { status: 404 }))
    .catch((x) => {
        console.error(x);
        return NextResponse.json({ "error": "There was an error attempting to delete those projects!"}, { status: 500 });
    })
}
export async function PATCH(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const project_id_query = searchParams.get("project_id");
    if (!project_id_query) return NextResponse.json({ "error": "You need to specify a project_id in the query parameters!" }, { status: 400 });
    
    const projectExists = await prisma.projects.findFirst({ where: { project_id: project_id_query.toString() } }).then((i) => i).catch(() => false);
    if (!projectExists) return NextResponse.json({ "error": "There is no project by this project_id!" }, { status: 400 });

    let { project_id, project_image_url, project_source_url, project_website_url, project_name, project_date, project_description } = qs.parse(await req.text());
    const project = {
        ...(project_id ? { project_id: project_id.toString() } : {}),
        ...(project_description ? { project_description: project_description.toString() } : {}),
        ...(project_date ? { project_date: project_date.toString() } : {}),
        ...(project_name ? { project_name: project_name.toString() } : {}),
        ...(project_website_url ? { project_website_url: project_website_url.toString() } : {}),
        ...(project_source_url ? { project_source_url: project_source_url.toString() } : {}),
        ...(project_image_url ? { project_image_url: project_image_url.toString() } : {})
    };
    return prisma.projects.update({ where: { project_id: project_id_query }, data: { ...project }})
    .then((data) => NextResponse.json(data)).catch((x) => {
        console.error(x);
        return NextResponse.json({ "error": "There was an error attempting to delete those projects!"}, { status: 500 });
    })

}