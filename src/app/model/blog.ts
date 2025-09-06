export interface BlogPost {
  id: string;
  title: string;
  author: string;
  summary: string;
  category: string;
  content: string;
  date: string;
}
export type BlogFormData = Omit<BlogPost, "id" | "date">;
