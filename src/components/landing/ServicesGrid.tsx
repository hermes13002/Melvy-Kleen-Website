import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../SectionHeading';

const services = [
    {
        id: 'deep',
        title: 'Deep Cleaning',
        description: 'Thorough cleaning of every corner, surface, and hard-to-reach area in your home or office.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" fill="#004080" fillOpacity="0.08" />
                <path d="M8 22c0-4 3-6 8-6s8 2 8 6" stroke="#004080" strokeWidth="2" strokeLinecap="round" />
                <circle cx="16" cy="11" r="4" stroke="#004080" strokeWidth="2" />
                <path d="M20 18l2 4" stroke="#00BFBF" strokeWidth="2" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'fumigation',
        title: 'Fumigation',
        description: 'Professional pest control and fumigation services to keep your space safe and pest-free.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" fill="#00BFBF" fillOpacity="0.12" />
                <path d="M10 22c2-4 10-4 12 0" stroke="#00BFBF" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 10 Q18 6 22 8" stroke="#00BFBF" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 10 Q12 5 9 8" stroke="#00BFBF" strokeWidth="2" strokeLinecap="round" />
                <circle cx="16" cy="16" r="4" stroke="#004080" strokeWidth="2" />
            </svg>
        ),
    },
    {
        id: 'satisfactory',
        title: 'Satisfactory Cleaning',
        description: 'Standard cleaning packages tailored to meet your everyday cleaning needs on schedule.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" fill="#004080" fillOpacity="0.08" />
                <path d="M10 17l4 4 8-8" stroke="#004080" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        id: 'stain',
        title: 'Stain Control',
        description: 'Expert stain removal and surface treatment for carpets, upholstery, and floors.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" fill="#00BFBF" fillOpacity="0.12" />
                <path d="M16 8 Q20 14 20 18a4 4 0 01-8 0Q12 14 16 8z" stroke="#00BFBF" strokeWidth="2" fill="#00BFBF" fillOpacity="0.3" />
                <path d="M13 20h6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'moveinout',
        title: 'Move In / Out',
        description: 'Complete move-in and move-out cleaning, leaving properties spotless for landlords or tenants.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" fill="#004080" fillOpacity="0.08" />
                <rect x="8" y="14" width="16" height="10" rx="2" stroke="#004080" strokeWidth="2" />
                <path d="M12 14V11a4 4 0 018 0v3" stroke="#004080" strokeWidth="2" strokeLinecap="round" />
                <circle cx="16" cy="19" r="2" fill="#00BFBF" />
            </svg>
        ),
    },
    {
        id: 'event',
        title: 'Event Cleaning',
        description: 'Pre and post-event cleaning for venues — we handle setup and cleanup so you can focus on hosting.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" fill="#00BFBF" fillOpacity="0.12" />
                <path d="M10 13h12M10 17h8M10 21h6" stroke="#00BFBF" strokeWidth="2" strokeLinecap="round" />
                <rect x="8" y="8" width="16" height="16" rx="3" stroke="#004080" strokeWidth="2" />
            </svg>
        ),
    },
    {
        id: 'office',
        title: 'Office Cleaning',
        description: 'Scheduled commercial cleaning to keep your workplace hygienic and presentable every day.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" fill="#004080" fillOpacity="0.08" />
                <rect x="9" y="8" width="14" height="16" rx="2" stroke="#004080" strokeWidth="2" />
                <path d="M12 12h8M12 16h8M12 20h4" stroke="#00BFBF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        ),
    },
    {
        id: 'maintenance',
        title: 'Maintenance',
        description: 'Ongoing cleaning maintenance plans to keep spaces pristine with regular scheduled visits.',
        icon: (
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <circle cx="16" cy="16" r="15" fill="#00BFBF" fillOpacity="0.12" />
                <path d="M10 22L22 10" stroke="#00BFBF" strokeWidth="2" strokeLinecap="round" />
                <circle cx="22" cy="10" r="3" fill="#004080" />
                <circle cx="10" cy="22" r="3" fill="#00BFBF" />
            </svg>
        ),
    },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.07 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesGrid() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="services" className="section-padding bg-white">
            <div className="container-max" ref={ref}>
                <SectionHeading
                    label="What We Offer"
                    title="Professional Cleaning Solutions"
                    subtitle="We can do much more than the spots you see from your chair. Cleaning reimagined for demanding standards."
                />

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? 'visible' : 'hidden'}
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={cardVariants}
                            className="card flex flex-col gap-4 group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                {service.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold text-brand-blue text-base mb-1">{service.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
