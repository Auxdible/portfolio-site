"use client";
import { CursorContext } from "@/context/CursorContext";
import { CategoryColors } from "@/lib/constants/CategoryColors";
import { BlogPostPayload } from "@/lib/types/BlogPostPayload";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useContext, useMemo } from "react";
import { hoverable } from "../CursorProvider";
import { Button } from "../ui/Button";

export function BlogCategories({ posts }: { posts: BlogPostPayload[] }) {
    const searchParams = useSearchParams();
    const uniqueCategories = useMemo(() => {
        const categories = new Set<string>();
        posts.forEach((post) => {
            post.categories.forEach((category) => {
                categories.add(category);
            });
        });
        return Array.from(categories);
    }, [posts]);
    const { setHovered } = useContext(CursorContext);
    const selectedCategories = useMemo(() => searchParams.get('categories')?.split(',').filter((i) => i) ?? [], [searchParams]);
    return (<div className="flex flex-col justify-center items-center gap-5">
        <h2 className="font-raleway font-bold text-3xl">Categories</h2>
 <ul className="flex flex-wrap justify-center gap-4 items-center">
            {uniqueCategories.map((category) => (
                <Button color1={CategoryColors[category as keyof typeof CategoryColors]} color2={CategoryColors[category as keyof typeof CategoryColors]}  key={category}
                {...hoverable(setHovered)}
                active={selectedCategories.includes(category)}
                href={selectedCategories.includes(category) ? 
                    `/blog?categories=${selectedCategories.filter((i) => i !== category).join(',')}` :
                    `/blog?categories=${[...selectedCategories, category].join(',')}`
                }
                >
                    <span className={`flex items-center gap-2 text-xl font-bold font-raleway`}>{category}</span>
                </Button>
            ))}
        </ul>
    </div>
    );
}