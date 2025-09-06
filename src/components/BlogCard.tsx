"use client";
import { BlogPost } from "@/app/model/blog";
import Link from "next/link";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="border p-4 rounded hover:shadow transition bg-white flex flex-col h-full">
      <h3 className="text-lg sm:text-xl font-bold">{post.title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 mt-1">
        By {post.author} | {new Date(post.date).toLocaleDateString()}
      </p>
      <p className="mt-2 text-sm flex-grow">{post.summary}</p>
      <span className="text-xs sm:text-sm bg-gray-200 px-2 py-1 rounded w-fit mt-2">
        {post.category}
      </span>
      <div className="mt-3">
        <Link
          href={`/blog/${post.id}`}
          className="text-blue-600 hover:underline"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
