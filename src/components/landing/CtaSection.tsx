import { useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

type FormState = {
    name: string;
    phone: string;
    serviceType: string;
    message: string;
};

const initialForm: FormState = { name: '', phone: '', serviceType: '', message: '' };

const serviceOptions = [
    'Deep Cleaning',
    'Fumigation',
    'Satisfactory Cleaning',
    'Stain Control',
    'Move In / Out',
    'Event Cleaning',
    'Office Cleaning',
    'Maintenance',
];

export default function CtaSection() {
    const { ref, isVisible } = useScrollReveal();
    const [form, setForm] = useState<FormState>(initialForm);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => { setSubmitted(false); setForm(initialForm); }, 4000);
    };

    return (
        <section id="contact" className="section-padding bg-brand-blue overflow-hidden relative">
            {/* bg decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-cyan/5 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white/5 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

            <div className="container-max relative" ref={ref}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* left text */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-brand-cyan text-xs font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
                            Let's Make Your Space Shine
                        </h2>
                        <p className="text-white/70 text-base leading-relaxed mb-8">
                            Book a free consultation today. Our team is ready to give your home or office the professional
                            cleaning treatment it deserves.
                        </p>

                        <div className="space-y-4">
                            {[
                                { icon: '📞', text: '+234 800 000 0000' },
                                { icon: '✉️', text: 'hello@melvykleen.com' },
                                { icon: '📍', text: 'Lagos, Nigeria' },
                            ].map((item) => (
                                <div key={item.text} className="flex items-center gap-3">
                                    <span className="text-xl">{item.icon}</span>
                                    <span className="text-white/80 text-sm">{item.text}</span>
                                </div>
                            ))}
                        </div>

                        {/* trust points */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { title: 'Skilled Professionals', desc: 'Vetted, trained, and certified' },
                                { title: 'Eco-Friendly Products', desc: 'Safe for kids & pets' },
                                { title: 'Flexible Scheduling', desc: 'Days, evenings, weekends' },
                            ].map((p) => (
                                <div key={p.title} className="flex gap-2">
                                    <div className="w-5 h-5 rounded-full bg-brand-cyan flex-shrink-0 flex items-center justify-center mt-0.5">
                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                                            <path d="M2 5l2 2 4-4" stroke="#004080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-medium text-sm">{p.title}</p>
                                        <p className="text-white/50 text-xs">{p.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* right form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white rounded-2xl p-8 shadow-2xl"
                    >
                        {submitted ? (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                                        <path d="M8 16l5 5 11-11" stroke="#16a34a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <h3 className="text-brand-blue font-bold text-xl mb-2">Request Sent!</h3>
                                <p className="text-gray-500 text-sm">We'll contact you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-4">
                                <h3 className="text-brand-blue font-bold text-lg mb-1">Send a Request</h3>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="cta-name" className="block text-xs font-medium text-gray-600 mb-1">Full Name</label>
                                        <input
                                            id="cta-name"
                                            name="name"
                                            type="text"
                                            required
                                            placeholder="Your name"
                                            value={form.name}
                                            onChange={handleChange}
                                            className="input-field"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="cta-phone" className="block text-xs font-medium text-gray-600 mb-1">Phone Number</label>
                                        <input
                                            id="cta-phone"
                                            name="phone"
                                            type="tel"
                                            required
                                            placeholder="+234..."
                                            value={form.phone}
                                            onChange={handleChange}
                                            className="input-field"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="cta-service" className="block text-xs font-medium text-gray-600 mb-1">Service Type</label>
                                    <select
                                        id="cta-service"
                                        name="serviceType"
                                        required
                                        value={form.serviceType}
                                        onChange={handleChange}
                                        className="input-field"
                                    >
                                        <option value="">Select a service</option>
                                        {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="cta-message" className="block text-xs font-medium text-gray-600 mb-1">Message (optional)</label>
                                    <textarea
                                        id="cta-message"
                                        name="message"
                                        rows={3}
                                        placeholder="Tell us about your space..."
                                        value={form.message}
                                        onChange={handleChange}
                                        className="input-field resize-none"
                                    />
                                </div>

                                <button type="submit" className="btn-primary w-full justify-center">
                                    Send Request
                                </button>
                            </form>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
