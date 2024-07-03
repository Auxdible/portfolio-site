import { GetObjectCommand, ListBucketsCommand, ListObjectsCommand, S3Client } from "@aws-sdk/client-s3";
import { Readable } from "stream";
import { BlogPostPayload } from "../types/BlogPostPayload";
import { cache } from "react";

const s3Client = new S3Client({ region: process.env.S3_REGION });

const streamToString = (stream: Readable): Promise<string> => {
    const chunks: Uint8Array[] = [];
    return new Promise((resolve, reject) => {
        stream.on("data", (chunk) => chunks.push(chunk));
        stream.on("error", reject);
        stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf-8")));
    });
};

export const latestBlogPosts = cache<() => Promise<BlogPostPayload[]>>(async () => {
    
    try {
        const objects = new ListObjectsCommand({ Bucket: process.env.S3_BUCKET, MaxKeys: 5, Prefix: "posts/", });
        const response = await s3Client.send(objects);
        
        const { Contents } = response;
        const posts = [];
        if (!Contents) return [];
        for (const i of Contents.filter((i) => i.Key?.endsWith(".md"))) {
            const get = new GetObjectCommand({ Bucket: process.env.S3_BUCKET, Key: i.Key });
            const object = await s3Client.send(get);
            const id = i.Key?.replace('.md', '');
            if (!id) continue;

            posts.push({
                title: object.Metadata?.title || "Untitled",
                description: object.Metadata?.description,
                date: object.LastModified || Date.now(),
                id: i.Key?.replace('.md', '').replace("posts/", "") || "unknown",
                author: i.Owner?.DisplayName || "Unknown",
                image: object.Metadata?.image_url,
            })
        }
        console.log(posts);
        return posts;
         
    } catch (x) {
        console.error(x);
        return [];
    }
});