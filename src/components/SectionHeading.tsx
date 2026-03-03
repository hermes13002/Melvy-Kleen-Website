// reusable section heading with cyan accent underline
interface Props {
    label?: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    light?: boolean;
}

export default function SectionHeading({ label, title, subtitle, align = 'center', light = false }: Props) {
    return (
        <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'}`}>
            {label && (
                <p className="text-brand-cyan text-xs font-semibold uppercase tracking-[0.18em] mb-3">
                    {label}
                </p>
            )}
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${light ? 'text-white' : 'text-brand-blue'}`}>
                {title}
            </h2>
            {subtitle && (
                <p className={`text-base md:text-lg max-w-2xl ${align === 'center' ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-gray-500'}`}>
                    {subtitle}
                </p>
            )}
            <div className={`h-1 w-12 rounded-full bg-brand-cyan mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
        </div>
    );
}
