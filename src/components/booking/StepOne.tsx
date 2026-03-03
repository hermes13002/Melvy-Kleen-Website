// step 1 — service selection
interface Props {
    selected: string;
    onSelect: (service: string) => void;
    onNext: () => void;
}

const services = [
    { id: 'deep', label: 'Deep Cleaning', desc: 'Full home/office top-to-bottom', emoji: '🧹', price: 'From ₦25,000' },
    { id: 'fumigation', label: 'Fumigation', desc: 'Pest & insect control treatment', emoji: '🌿', price: 'From ₦18,000' },
    { id: 'satisfactory', label: 'Satisfactory Clean', desc: 'Standard routine cleaning', emoji: '✅', price: 'From ₦12,000' },
    { id: 'stain', label: 'Stain Control', desc: 'Carpet & upholstery treatment', emoji: '💧', price: 'From ₦15,000' },
    { id: 'moveinout', label: 'Move In / Out', desc: 'Pre/post-move thorough clean', emoji: '📦', price: 'From ₦30,000' },
    { id: 'event', label: 'Event Cleaning', desc: 'Before or after your event', emoji: '🎉', price: 'From ₦20,000' },
    { id: 'office', label: 'Office Cleaning', desc: 'Commercial space scheduled clean', emoji: '🏢', price: 'From ₦22,000' },
    { id: 'maintenance', label: 'Maintenance', desc: 'Recurring weekly/monthly visits', emoji: '🔄', price: 'From ₦10,000' },
];

export default function StepOne({ selected, onSelect, onNext }: Props) {
    return (
        <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-2">Select a Service</h2>
            <p className="text-gray-500 text-sm mb-8">Choose the cleaning service that best fits your needs.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services.map((s) => (
                    <button
                        key={s.id}
                        type="button"
                        onClick={() => onSelect(s.id)}
                        className={`text-left p-4 rounded-xl border-2 transition-all duration-200 group
              ${selected === s.id
                                ? 'border-brand-cyan bg-brand-light shadow-md'
                                : 'border-gray-100 bg-white hover:border-brand-cyan/50 hover:shadow-sm'
                            }`}
                        aria-pressed={selected === s.id}
                    >
                        <div className="flex items-start gap-3">
                            <span className="text-2xl leading-none mt-0.5">{s.emoji}</span>
                            <div className="flex-1">
                                <p className={`font-semibold text-sm ${selected === s.id ? 'text-brand-blue' : 'text-gray-800'}`}>
                                    {s.label}
                                </p>
                                <p className="text-gray-400 text-xs mt-0.5">{s.desc}</p>
                            </div>
                            <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${selected === s.id ? 'border-brand-cyan bg-brand-cyan' : 'border-gray-200'
                                }`}>
                                {selected === s.id && (
                                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                                        <path d="M2 5l2 2 4-4" stroke="#004080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </div>
                        <p className="text-brand-cyan text-xs font-semibold mt-2 ml-9">{s.price}</p>
                    </button>
                ))}
            </div>

            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={onNext}
                    disabled={!selected}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                    Continue →
                </button>
            </div>
        </div>
    );
}
