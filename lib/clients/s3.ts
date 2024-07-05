import { GetObjectCommand, ListObjectsCommand, ListObjectsCommandOutput, S3Client } from "@aws-sdk/client-s3";
import { Readable } from "stream";
import { BlogPostPayload } from "../types/BlogPostPayload";
import { cache } from "react";

const s3Client = new S3Client({ region: process.env.S3_REGION, credentials: { accessKeyId: process.env.AWS_ACCESS_KEY_NAME ?? "", secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY ?? "" }});

const streamToString = (stream: Readable): Promise<string> => {
    const chunks: Uint8Array[] = [];
    return new Promise((resolve, reject) => {
        stream.on("data", (chunk) => chunks.push(chunk));
        stream.on("error", reject);
        stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
    });
};

export const getPostContent = cache<(id: string) => Promise<(BlogPostPayload & { content: string }) | null>>(async (id: string) => {
    const list = new ListObjectsCommand({ Bucket: process.env.S3_BUCKET, Prefix: `posts/${id}.md` });
    const get = new GetObjectCommand({ Bucket: process.env.S3_BUCKET, Key: `posts/${id}.md` });
    
    const object = await s3Client.send(get);
    const { Body, Metadata  } = object;
    if (!Body) return null;
    return {
        title: Metadata?.title || "Untitled",
        description: Metadata?.description,
        date: object.LastModified || Date.now(),
        id: id,
        author: Metadata?.author || "Unknown",
        image: Metadata?.image_url,
        content: await streamToString(Body as Readable),
    };
})

const listBlogObjects = cache<() => Promise<ListObjectsCommandOutput>>(async () => {
    const objects = new ListObjectsCommand({ Bucket: process.env.S3_BUCKET, Prefix: "posts/" });
    const response = await s3Client.send(objects);
        
    return { ...response, Contents: response.Contents?.filter((i) => i.Key?.endsWith(".md")).sort((a,b) => (b.LastModified?.valueOf() ?? 0) - (a.LastModified?.valueOf() ?? 0)) };
})
export type BlogPostFetchOptions = { limit?: number };
export const fetchBlogPosts = cache<(options: BlogPostFetchOptions) => Promise<BlogPostPayload[]>>(async (options: BlogPostFetchOptions) => {
    
    try {
        const { Contents } = await listBlogObjects();
        const posts = [];
        if (!Contents) return [];
        for (const i of Contents) {
            const get = new GetObjectCommand({ Bucket: process.env.S3_BUCKET, Key: i.Key });
            const object = await s3Client.send(get);
            const id = i.Key?.replace('.md', '');
            if (!id) continue;

            posts.push({
                title: object.Metadata?.title || "Untitled",
                description: object.Metadata?.description,
                date: object.LastModified || Date.now(),
                id: i.Key?.replace('.md', '').replace("posts/", "") || "unknown",
                author: object.Metadata?.author || "Unknown",
                image: object.Metadata?.image_url,
            })
        }
        return posts.splice(0, options.limit);
         
    } catch (x) {
        console.error(x);
        return [];
    }
});