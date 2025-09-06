"use client";

interface StepperProps {
  steps: string[];
  currentStep: number;
}

export default function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
      {steps.map((label, index) => {
        const isActive = index + 1 === currentStep;
        const isCompleted = index + 1 < currentStep;

        return (
          <div key={index} className="flex items-center mb-4 sm:mb-0 flex-1">
            {/* Circle */}
            <div
              className={`flex items-center justify-center w-8 h-8 rounded-full border-2 flex-shrink-0
                ${isCompleted ? "bg-green-500 text-white border-green-500" : ""}
                ${
                  isActive
                    ? "border-blue-600 text-blue-600"
                    : "border-gray-300 text-gray-600"
                }
              `}
            >
              {isCompleted ? "✓" : index + 1}
            </div>

            {/* Label */}
            <span
              className={`ml-2 text-sm ${
                isActive ? "font-bold text-blue-600" : "text-gray-600"
              }`}
            >
              {label}
            </span>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="hidden sm:flex flex-1 h-[2px] bg-gray-300 mx-2" />
            )}
          </div>
        );
      })}
    </div>
  );
}
