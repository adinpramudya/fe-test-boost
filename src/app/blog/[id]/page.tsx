"use client";
import { useBlog } from "@/app/context/BlogContext";
import { useParams } from "next/navigation";

export default function BlogDetailPage() {
  const { id } = useParams();
  const { posts } = useBlog();

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="max-w-2xl mx-auto p-4 sm:p-6">
        <h1 className="text-lg sm:text-xl font-bold">Post not found</h1>
        <p className="text-sm sm:text-base">
          Maybe it was deleted or never existed.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-4 sm:p-6">
      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold mb-2">{post.title}</h1>

      {/* Meta */}
      <p className="text-gray-600 text-xs sm:text-sm mb-4 flex flex-wrap items-center gap-2">
        <span>By {post.author}</span>
        <span>|</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
        <span className="bg-gray-200 px-2 py-0.5 rounded text-xs">
          {post.category}
        </span>
      </p>

      {/* Summary */}
      <p className="text-base sm:text-lg italic mb-6">{post.summary}</p>

      {/* Content */}
      <div className="prose prose-sm sm:prose max-w-full break-words">
        {post.content.split("\n").map((para, idx) => (
          <p key={idx}>{para}</p>
        ))}
      </div>
    </div>
  );
}
