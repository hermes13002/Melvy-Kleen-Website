// progress bar for 3-step booking wizard
interface Props {
    currentStep: 1 | 2 | 3;
}

const steps = [
    { num: 1, label: 'Service' },
    { num: 2, label: 'Date & Time' },
    { num: 3, label: 'Your Details' },
];

export default function ProgressBar({ currentStep }: Props) {
    return (
        <div className="w-full max-w-lg mx-auto mb-10">
            <div className="flex items-center">
                {steps.map((step, idx) => (
                    <div key={step.num} className="flex items-center flex-1 last:flex-none">
                        {/* step circle */}
                        <div className="flex flex-col items-center">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm border-2 transition-all duration-300 ${step.num < currentStep
                                        ? 'bg-brand-cyan border-brand-cyan text-brand-blue'
                                        : step.num === currentStep
                                            ? 'bg-brand-blue border-brand-blue text-white'
                                            : 'bg-white border-gray-200 text-gray-400'
                                    }`}
                            >
                                {step.num < currentStep ? (
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                        <path d="M3 8l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                ) : (
                                    step.num
                                )}
                            </div>
                            <span className={`text-xs mt-1.5 font-medium ${step.num === currentStep ? 'text-brand-blue' : 'text-gray-400'}`}>
                                {step.label}
                            </span>
                        </div>

                        {/* connector */}
                        {idx < steps.length - 1 && (
                            <div className="flex-1 h-0.5 mx-2 mb-5 rounded-full transition-all duration-500 bg-gray-200 overflow-hidden">
                                <div
                                    className="h-full bg-brand-cyan transition-all duration-500"
                                    style={{ width: step.num < currentStep ? '100%' : '0%' }}
                                />
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
