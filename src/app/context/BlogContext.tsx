"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { BlogPost } from "@/app/model/blog";
import { savePosts, loadPosts } from "@/app/lib/storage";

interface BlogContextType {
  posts: BlogPost[];
  addPost: (post: BlogPost) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

export const BlogProvider = ({ children }: { children: React.ReactNode }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    setPosts(loadPosts()); // load saat pertama kali
  }, []);

  const addPost = (post: BlogPost) => {
    const updated = [...posts, post];
    setPosts(updated);
    savePosts(updated); // simpan ke localStorage
  };

  return (
    <BlogContext.Provider value={{ posts, addPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  const context = useContext(BlogContext);
  if (!context) throw new Error("useBlog must be used within BlogProvider");
  return context;
};
