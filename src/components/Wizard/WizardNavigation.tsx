"use client";

interface Props {
  step: number;
  next: () => void;
  back: () => void;
}

export default function WizardNavigation({ step, next, back }: Props) {
  return (
    <div className="flex justify-between mt-6">
      {step > 1 && (
        <button onClick={back} className="px-4 py-2 bg-gray-300 rounded">
          Back
        </button>
      )}
      {step < 4 && (
        <button
          onClick={next}
          className="ml-auto px-4 py-2 bg-blue-600 text-white rounded"
        >
          Next
        </button>
      )}
    </div>
  );
}
