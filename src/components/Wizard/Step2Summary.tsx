"use client";
import { BlogFormData } from "@/app/model/blog";
import BlogFormField from "../BlogFormField";

interface Props {
  formData: BlogFormData;
  setFormData: React.Dispatch<React.SetStateAction<BlogFormData>>;
}

export default function Step2Summary({ formData, setFormData }: Props) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 2 - Summary & Category</h2>
      <BlogFormField
        label="Blog Summary"
        value={formData.summary}
        onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
        required
      />
      <div className="mb-4">
        <label className="block font-medium mb-1">Category</label>
        <select
          className="border p-2 w-full rounded"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          required
        >
          <option value="">-- Select Category --</option>
          <option value="Tech">Tech</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Business">Business</option>
        </select>
      </div>
    </div>
  );
}
