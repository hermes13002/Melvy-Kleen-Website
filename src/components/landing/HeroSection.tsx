import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-brand-blue overflow-hidden flex items-center">
            {/* decorative shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-cyan/10" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-cyan/5" />
                {/* diagonal stripe accent */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-cyan/5 to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full pt-24 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* text content */}
                    <div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-4"
                        >
                            #1 Cleaning Service Agency
                        </motion.p>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-6"
                        >
                            Experience the{' '}
                            <span className="text-brand-cyan">Art of Luxury</span>{' '}
                            Cleaning
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="text-white/75 text-lg leading-relaxed mb-8 max-w-md"
                        >
                            We offer premium cleaning services for homes, offices, and special events.
                            Sit back while the Melvy Kleen team transforms your space.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link to="/booking" className="btn-primary text-base px-8 py-3.5">
                                Book a Clean
                            </Link>
                            <a href="/#results" className="btn-outline text-base px-8 py-3.5 border-white text-white hover:bg-white hover:text-brand-blue">
                                See Our Work
                            </a>
                        </motion.div>

                        {/* trust badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className="mt-10 flex flex-wrap items-center gap-6"
                        >
                            {[
                                { value: '500+', label: 'Satisfied Clients' },
                                { value: '4.9★', label: 'Average Rating' },
                                { value: '5y+', label: 'Experience' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <p className="text-2xl font-bold text-brand-cyan">{stat.value}</p>
                                    <p className="text-white/60 text-xs">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* hero visual card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative hidden lg:flex justify-center"
                    >
                        {/* card background */}
                        <div className="relative w-full max-w-md">
                            <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm border border-white/20" />
                            <div className="relative p-8 rounded-3xl">
                                {/* guarantee badge */}
                                <div className="absolute -top-4 -right-4 bg-brand-cyan text-brand-blue font-bold text-xs px-4 py-2 rounded-full shadow-lg">
                                    100% Guaranteed
                                </div>

                                {/* cleaning illustration */}
                                <div className="w-full h-64 bg-gradient-to-br from-brand-cyan/20 to-brand-blue-light/20 rounded-2xl flex items-center justify-center border border-white/10">
                                    <div className="text-center">
                                        {/* large cleaning mop icon */}
                                        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" aria-label="Cleaning illustration">
                                            <circle cx="50" cy="50" r="48" fill="white" fillOpacity="0.1" />
                                            {/* person silhouette */}
                                            <circle cx="50" cy="22" r="10" fill="#00BFBF" />
                                            <rect x="42" y="34" width="16" height="22" rx="8" fill="#004080" />
                                            {/* mop handle */}
                                            <rect x="62" y="28" width="4" height="50" rx="2" fill="#00BFBF" />
                                            {/* mop head */}
                                            <rect x="50" y="74" width="28" height="8" rx="4" fill="#ffffff" fillOpacity="0.8" />
                                            {/* arm */}
                                            <path d="M50 44 Q60 38 64 32" stroke="#00BFBF" strokeWidth="4" strokeLinecap="round" />
                                            {/* legs */}
                                            <path d="M46 56 L43 76" stroke="#004080" strokeWidth="5" strokeLinecap="round" />
                                            <path d="M54 56 L57 76" stroke="#004080" strokeWidth="5" strokeLinecap="round" />
                                            {/* sparkles */}
                                            <circle cx="22" cy="30" r="3" fill="#00BFBF" opacity="0.7" />
                                            <circle cx="80" cy="60" r="2" fill="#00BFBF" opacity="0.7" />
                                            <circle cx="18" cy="65" r="2" fill="white" opacity="0.5" />
                                        </svg>
                                        <p className="text-white font-semibold mt-2">Professional &amp; Certified</p>
                                    </div>
                                </div>

                                {/* quick stats */}
                                <div className="mt-6 grid grid-cols-2 gap-3">
                                    <div className="bg-white/10 rounded-xl p-3 text-center">
                                        <p className="text-brand-cyan font-bold text-lg">⚡ Fast</p>
                                        <p className="text-white/70 text-xs">Same-day booking</p>
                                    </div>
                                    <div className="bg-white/10 rounded-xl p-3 text-center">
                                        <p className="text-brand-cyan font-bold text-lg">🛡️ Safe</p>
                                        <p className="text-white/70 text-xs">Eco-friendly products</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* wave bottom */}
            <div className="absolute bottom-0 inset-x-0">
                <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12 md:h-16">
                    <path d="M0 60 C480 0 960 0 1440 60 L1440 60 L0 60Z" fill="white" />
                </svg>
            </div>
        </section>
    );
}
