interface Props {
    selected: string;
    onSelect: (service: string) => void;
    onNext: () => void;
}

export const services = [
    {
        id: 'house',
        label: 'House Cleaning',
        desc: 'Comprehensive cleaning for your home',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
        ),
        price: 'From ₦15,000'
    },
    {
        id: 'office',
        label: 'Office Cleaning',
        desc: 'Professional cleaning for workspaces',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <path d="M9 22v-4h6v4"></path>
                <path d="M8 6h.01"></path>
                <path d="M16 6h.01"></path>
                <path d="M12 6h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M16 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
            </svg>
        ),
        price: 'From ₦25,000'
    },
    {
        id: 'postconstruction',
        label: 'Post Construction',
        desc: 'Deep cleaning after renovations',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
        ),
        price: 'From ₦40,000'
    },
    {
        id: 'ironing',
        label: 'Detailed Ironing',
        desc: 'Professional ironing and folding',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14h16"></path>
                <path d="M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"></path>
                <path d="M18 10c0-3.3-2.7-6-6-6S6 6.7 6 10v4h12v-4z"></path>
            </svg>
        ),
        price: 'From ₦10,000'
    },
    {
        id: 'relocation',
        label: 'Relocation Cleaning',
        desc: 'Move in / Move out deep cleaning',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
        ),
        price: 'From ₦35,000'
    },
    {
        id: 'window',
        label: 'Window Cleaning',
        desc: 'Interior and exterior glass cleaning',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="12" y1="3" x2="12" y2="21"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
            </svg>
        ),
        price: 'From ₦12,000'
    },
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
                        className={`text-left p-5 rounded-3xl border-2 transition-all duration-300 group overflow-hidden relative
              ${selected === s.id
                                ? 'border-brand-blue bg-brand-blue shadow-lg scale-[1.02]'
                                : 'border-gray-100 bg-white hover:border-brand-cyan/50 hover:shadow-md'
                            }`}
                        aria-pressed={selected === s.id}
                    >
                        <div className="flex items-start gap-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${selected === s.id ? 'bg-white/20 text-white' : 'bg-brand-cyan/10 text-brand-cyan'}`}>
                                {s.icon}
                            </div>
                            <div className="flex-1 mt-1">
                                <p className={`font-bold text-[15px] transition-colors duration-300 ${selected === s.id ? 'text-white' : 'text-brand-blue'}`}>
                                    {s.label}
                                </p>
                                <p className={`text-xs mt-1 transition-colors duration-300 ${selected === s.id ? 'text-white/80' : 'text-gray-500'}`}>{s.desc}</p>
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 mt-1 flex items-center justify-center transition-all duration-300 ${selected === s.id ? 'border-brand-cyan bg-brand-cyan' : 'border-gray-200 bg-transparent'
                                }`}>
                                {selected === s.id && (
                                    <svg width="12" height="12" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                                        <path d="M2 5l2 2 4-4" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                        </div>
                        <p className={`text-sm font-semibold mt-3 ml-16 transition-colors duration-300 ${selected === s.id ? 'text-white' : 'text-brand-cyan'}`}>{s.price}</p>
                    </button>
                ))}
            </div>

            <div className="flex justify-end">
                <button
                    type="button"
                    onClick={onNext}
                    disabled={!selected}
                    className="btn-primary text-white disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                    Continue →
                </button>
            </div>
        </div>
    );
}
