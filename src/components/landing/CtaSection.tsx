import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function CtaSection() {
    const { ref, isVisible } = useScrollReveal();

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

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brand-cyan/20 flex items-center justify-center text-white">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white/60 text-xs font-medium uppercase tracking-wider mb-0.5">WhatsApp</span>
                                    <span className="text-white/90 text-[15px] font-semibold">0809 676 3192</span>
                                    <span className="text-white/90 text-[15px] font-semibold">0912 354 4085</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-brand-cyan/20 flex items-center justify-center text-white">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-white/60 text-xs font-medium uppercase tracking-wider mb-0.5">Instagram / TikTok</span>
                                    <span className="text-white/90 text-[15px] font-semibold">Melvy Kleen</span>
                                </div>
                            </div>
                        </div>

                        {/* trust points */}
                        {/* <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
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
                        </div> */}
                    </motion.div>

                    {/* right CTA card replacing form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden"
                    >
                        {/* subtle background pattern in card */}
                        <div className="absolute -top-16 -right-16 w-32 h-32 bg-brand-cyan/10 rounded-full blur-2xl" />
                        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-brand-blue/5 rounded-full blur-2xl" />

                        <div className="w-20 h-20 bg-brand-cyan/10 rounded-full flex items-center justify-center mb-6">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#00bfff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                                <path d="M8 14h.01" />
                                <path d="M12 14h.01" />
                                <path d="M16 14h.01" />
                                <path d="M8 18h.01" />
                                <path d="M12 18h.01" />
                                <path d="M16 18h.01" />
                            </svg>
                        </div>

                        <h3 className="text-2xl font-bold text-brand-blue mb-4">Ready for a Spotless Space?</h3>
                        <p className="text-gray-600 mb-8 max-w-sm">
                            Skip the wait and select your preferred cleaning service directly. Secure your spot in under 2 minutes.
                        </p>

                        <Link
                            to="/booking"
                            className="btn-primary w-full max-w-xs text-center text-white justify-center py-4 text-base relative group overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                Book Your Cleaning
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </span>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
