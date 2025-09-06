"use client";

interface Props {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function BlogFormField({
  label,
  value,
  onChange,
  required,
}: Props) {
  return (
    <div className="mb-4">
      <label className="block font-medium mb-1 text-sm sm:text-base">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="text"
        className="border p-2 w-full rounded text-sm sm:text-base"
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
}
