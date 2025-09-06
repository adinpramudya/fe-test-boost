"use client";
import { useState } from "react";
import Step1Metadata from "@/components/Wizard/Step1Metadata";
import Step2Summary from "@/components/Wizard/Step2Summary";
import Step3Content from "@/components/Wizard/Step3Content";
import Step4Review from "@/components/Wizard/Step4Review";
import WizardNavigation from "@/components/Wizard/WizardNavigation";
import Stepper from "@/components/Wizard/Stepper";

const steps = ["Metadata", "Summary", "Content", "Review"];

export default function NewBlogPage() {
  const [step, setStep] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    summary: "",
    category: "",
    content: "",
  });

  const validateStep = () => {
    if (step === 1) {
      if (formData.title.trim().length < 5) {
        setError("Title must be at least 5 characters");
        return false;
      }
      if (!formData.author.trim()) {
        setError("Author name is required");
        return false;
      }
    }
    if (step === 2) {
      if (!formData.summary.trim()) {
        setError("Summary is required");
        return false;
      }
      if (!formData.category) {
        setError("Please select a category");
        return false;
      }
    }
    if (step === 3) {
      if (formData.content.trim().length < 20) {
        setError("Content must be at least 20 characters");
        return false;
      }
    }
    setError(null);
    return true;
  };

  const next = () => {
    if (validateStep()) setStep((s) => s + 1);
  };
  const back = () => setStep((s) => s - 1);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Stepper steps={steps} currentStep={step} />

      {step === 1 && (
        <Step1Metadata formData={formData} setFormData={setFormData} />
      )}
      {step === 2 && (
        <Step2Summary formData={formData} setFormData={setFormData} />
      )}
      {step === 3 && (
        <Step3Content formData={formData} setFormData={setFormData} />
      )}
      {step === 4 && <Step4Review formData={formData} />}

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <WizardNavigation step={step} next={next} back={back} />
    </div>
  );
}
