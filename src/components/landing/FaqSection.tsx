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
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className={`bg-white rounded-[2rem] border transition-all duration-300 overflow-hidden ${open ? 'border-brand-cyan shadow-md' : 'border-gray-100 shadow-sm hover:border-brand-cyan/40 hover:shadow-md'}`}
        >
            <button
                type="button"
                onClick={() => setOpen((o) => !o)}
                className="w-full text-left px-6 py-6 sm:px-8 sm:py-7 flex items-center justify-between gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan focus-visible:ring-inset"
                aria-expanded={open}
            >
                <span className={`font-bold text-lg leading-snug transition-colors duration-300 ${open ? 'text-brand-cyan' : 'text-brand-blue'}`}>
                    {question}
                </span>
                <span
                    className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${open ? 'bg-brand-cyan text-white rotate-180' : 'bg-brand-light text-brand-blue'}`}
                    aria-hidden="true"
                >
                    {open ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    )}
                </span>
            </button>

            <AnimatePresence initial={false}>
                {open && (
                    <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                        <div className="px-6 pb-6 sm:px-8 sm:pb-7 pt-0 text-gray-600 leading-relaxed text-base">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
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
