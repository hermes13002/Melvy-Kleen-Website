import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
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
                        {/* <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-4"
                        >
                            #1 Cleaning Service Agency
                        </motion.p> */}

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-blue leading-[1.1] mb-6"
                        >
                            Experience the{' '}
                            <span className="text-brand-cyan">Art of Luxury</span>{' '}
                            Cleaning
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.35 }}
                            className="text-slate-600 text-lg leading-relaxed mb-8 max-w-md"
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
                            <Link to="/booking" className="btn-primary text-base text-white hover:text-white px-8 py-3.5">
                                Book a Clean
                            </Link>
                            <Link to="/results" className="btn-outline text-base px-8 py-3.5 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                                See Our Work
                            </Link>
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
                                    <p className="text-2xl font-bold text-brand-blue">{stat.value}</p>
                                    <p className="text-slate-500 text-xs font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* hero visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative hidden lg:flex justify-end items-center"
                    >
                        <div
                            className="relative w-full max-w-lg aspect-square shadow-2xl overflow-hidden group animate-[morph_8s_ease-in-out_infinite] bg-brand-light"
                            style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}
                        >
                            {/* Accent border overlay */}
                            <div className="absolute inset-0 border-4 border-brand-cyan/30 z-10 pointer-events-none animate-[morph_8s_ease-in-out_infinite]" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }} />

                            {/* cleaning image featuring flowers */}
                            <img
                                src="/src/assets/images/hero.png"
                                alt="Professional Cleaner"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* bottom spacing since section doesn't have a wave anymore */}
            <div className="h-12 md:h-16" />
        </section>
    );
}
