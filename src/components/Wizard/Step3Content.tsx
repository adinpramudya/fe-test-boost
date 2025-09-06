"use client";

import { BlogFormData } from "@/app/model/blog";

interface Props {
  formData: BlogFormData;
  setFormData: React.Dispatch<React.SetStateAction<BlogFormData>>;
}

export default function Step3Content({ formData, setFormData }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 3 - Blog Content</h2>
      <textarea
        className="border p-2 w-full h-40 rounded"
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        required
      />
    </div>
  );
}
