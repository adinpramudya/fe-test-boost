import { BlogPost } from "../model/blog";

const STORAGE_KEY = "blog_posts";

export const savePosts = (posts: BlogPost[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  }
};

export const loadPosts = (): BlogPost[] => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }
  return [];
};
