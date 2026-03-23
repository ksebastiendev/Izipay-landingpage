interface StepIndicatorProps {
  currentStep: number;
  totalSteps?: number;
}

export const StepIndicator = ({
  currentStep,
  totalSteps = 3,
}: StepIndicatorProps) => (
  <div className="flex gap-1.5 mb-6">
    {Array.from({ length: totalSteps }).map((_, i) => (
      <div
        key={i}
        className={`flex-1 h-1 rounded-full transition-colors duration-300 ${
          i < currentStep ? "bg-[#DC3F4D]" : "bg-slate-200"
        }`}
      />
    ))}
  </div>
);
