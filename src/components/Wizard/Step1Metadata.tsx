"use client";

import { BlogFormData } from "@/app/model/blog";
import BlogFormField from "../BlogFormField";

interface Props {
  formData: BlogFormData;
  setFormData: React.Dispatch<React.SetStateAction<BlogFormData>>;
}

export default function Step1Metadata({ formData, setFormData }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 1 - Blog Metadata</h2>
      <BlogFormField
        label="Blog Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <BlogFormField
        label="Author Name"
        value={formData.author}
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
        required
      />
    </div>
  );
}
