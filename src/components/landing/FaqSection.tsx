import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../SectionHeading';

const faqs = [
    {
        id: '1',
        question: 'Is Fumigation included in the service?',
        answer: 'No, fumigation is not included in a cleaning service. It is a separate, specialized service that requires its own booking and pricing.',
    },
    {
        id: '2',
        question: 'Is Upholstery Cleaning included in the service?',
        answer: 'No, it\'s not included in a standard cleaning service. Cleaning of sofas and upholstery is a separate service on its own.',
    },
    {
        id: '3',
        question: 'Will the Team clean the walls of the house?',
        answer: 'No please, cleaning of walls is not part of any cleaning service as we do not specialize in it.',
    },
    {
        id: '4',
        question: 'Can you keep a Date for me?',
        answer: 'No booking reservation is confirmed until full payment, as stated in the quote, has been made.',
    },
    {
        id: '5',
        question: 'How long does a typical cleaning session take?',
        answer: 'It depends on the size of the property and the service type. A standard home clean typically takes 2–4 hours, while a deep clean can take 4–8 hours.',
    },
    {
        id: '6',
        question: 'Do I need to be home during the cleaning?',
        answer: 'No, you don\'t have to be present. Many of our clients prefer to give us access and return to a spotless home. We take security and trust very seriously.',
    },
];

function FaqItem({ question, answer, index }: { question: string; answer: string; index: number }) {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            className="rounded-2xl overflow-hidden shadow-md"
        >
            {/* two-tone card layout matching design reference */}
            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* question — dark blue */}
                <button
                    type="button"
                    onClick={() => setOpen((o) => !o)}
                    className="bg-brand-blue text-white text-left p-6 flex items-center justify-between gap-4
                     hover:bg-brand-blue-dark transition-colors duration-200 group"
                    aria-expanded={open}
                >
                    <span className="font-semibold text-base leading-snug">{question}</span>
                    <span
                        className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-white/40 flex items-center justify-center
                        transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
                        aria-hidden="true"
                    >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 1v10M1 6h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </span>
                </button>

                {/* answer — cyan */}
                <div className="bg-brand-cyan">
                    <AnimatePresence initial={false}>
                        {/* on md+ always shown inline; on mobile collapse */}
                        <div className="hidden md:flex items-center p-6">
                            <p className="text-brand-blue text-sm leading-relaxed font-medium">{answer}</p>
                        </div>
                    </AnimatePresence>
                    <AnimatePresence initial={false}>
                        {open && (
                            <motion.div
                                key="mobile-answer"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="md:hidden overflow-hidden"
                            >
                                <p className="p-5 text-brand-blue text-sm leading-relaxed font-medium">{answer}</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}

export default function FaqSection() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="faq" className="section-padding bg-gradient-to-br from-brand-light via-white to-blue-50 relative overflow-hidden">
            {/* decorative circles */}
            <div className="absolute -left-24 top-1/4 w-64 h-64 rounded-full bg-brand-cyan/10 pointer-events-none" />
            <div className="absolute -right-24 bottom-1/4 w-80 h-80 rounded-full bg-brand-blue/5 pointer-events-none" />

            <div className="container-max relative" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        label="FAQ"
                        title="Frequently Asked Questions"
                        subtitle="Quick answers to the questions we hear most often."
                    />
                </motion.div>

                <div className={`flex flex-col gap-4 max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    {faqs.map((faq, i) => (
                        <FaqItem key={faq.id} question={faq.question} answer={faq.answer} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
