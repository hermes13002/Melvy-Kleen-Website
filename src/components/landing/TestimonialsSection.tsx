import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../SectionHeading';
import type { Testimonial } from '../../types';

const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Adaeze Okonkwo',
        location: 'Lagos Island',
        rating: 5,
        quote: 'Melvy Kleen transformed my apartment completely! The team was professional, thorough, and worked with amazing speed. My home has never looked this good. Highly recommend!',
        initials: 'AO',
    },
    {
        id: '2',
        name: 'Emeka Okafor',
        location: 'Victoria Island',
        rating: 5,
        quote: 'Superb service for my office cleaning needs! They are reliably on time every single week. The quality is consistent and the staff are respectful of our workspace.',
        initials: 'EO',
    },
    {
        id: '3',
        name: 'Ngozi Adeleke',
        location: 'Ikeja GRA',
        rating: 5,
        quote: 'Used them for our event cleanup — 300 guests and they had the venue spotless in 2 hours. Absolutely incredible. Will be booking them for all future events.',
        initials: 'NA',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill={i < rating ? '#00BFBF' : '#e5e7eb'} aria-hidden="true">
                    <path d="M8 1.5l1.76 3.57 3.94.57-2.85 2.78.67 3.93L8 10.35l-3.52 1.85.67-3.93L2.3 5.64l3.94-.57L8 1.5z" />
                </svg>
            ))}
        </div>
    );
}

export default function TestimonialsSection() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="testimonials" className="section-padding bg-white">
            <div className="container-max" ref={ref}>
                <SectionHeading
                    label="What Our Clients Say"
                    title="Trusted by Hundreds of Clients"
                    subtitle="Real feedback from real clients who experienced the Melvy Kleen difference."
                />

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                >
                    {testimonials.map((t) => (
                        <motion.div
                            key={t.id}
                            variants={cardVariants}
                            className="card flex flex-col gap-4 relative"
                        >
                            {/* quote mark */}
                            <span className="absolute top-5 right-6 text-5xl text-brand-cyan/20 font-serif leading-none select-none" aria-hidden="true">"</span>

                            <StarRating rating={t.rating} />

                            <p className="text-gray-600 text-sm leading-relaxed relative z-10">"{t.quote}"</p>

                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                                <div className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                    {t.initials}
                                </div>
                                <div>
                                    <p className="font-semibold text-brand-blue text-sm">{t.name}</p>
                                    <p className="text-gray-400 text-xs">{t.location}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
