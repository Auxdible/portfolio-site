"use server";
export type BlogPostPayload = {
    readonly title: string;
    readonly author: string;
    readonly description?: string;
    readonly date: number | Date;
    readonly image?: string;
    readonly categories: string[];
    readonly id: string;
};
