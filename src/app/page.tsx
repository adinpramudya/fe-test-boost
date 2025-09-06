"use client";
import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import { useBlog } from "./context/BlogContext";

export default function HomePage() {
  const { posts } = useBlog();

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-2">
        <h1 className="text-xl sm:text-2xl font-bold">Blog Posts</h1>
        <Link
          href="/blog/new"
          className="px-4 py-2 bg-blue-600 text-white rounded w-full sm:w-auto text-center"
        >
          New Post
        </Link>
      </div>

      {posts.length === 0 ? (
        <p>No blog posts yet. Create one!</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
