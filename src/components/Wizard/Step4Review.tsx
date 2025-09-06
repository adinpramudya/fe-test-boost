"use client";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { useBlog } from "@/app/context/BlogContext";
import { BlogFormData } from "@/app/model/blog";

interface Props {
  formData: BlogFormData;
}

export default function Step4Review({ formData }: Props) {
  const { addPost } = useBlog();
  const router = useRouter();

  const handleSubmit = () => {
    const newPost = {
      id: uuidv4(),
      ...formData,
      date: new Date().toISOString(),
    };
    addPost(newPost);
    router.push("/");
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Step 4 - Review & Submit</h2>
      <div className="bg-gray-100 p-4 rounded mb-4 w-full max-w-full overflow-x-auto">
        <p>
          <strong>Title:</strong> {formData.title}
        </p>
        <p>
          <strong>Author:</strong> {formData.author}
        </p>
        <p>
          <strong>Summary:</strong> {formData.summary}
        </p>
        <p>
          <strong>Category:</strong> {formData.category}
        </p>
        <p className="break-words">
          <strong>Content:</strong> {formData.content}
        </p>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full sm:w-auto px-4 py-2 bg-green-600 text-white rounded"
      >
        Submit Blog
      </button>
    </div>
  );
}
