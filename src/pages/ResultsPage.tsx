import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal';

const resultImages = [
    {
        id: 1,
        title: 'Deep Cleaning (Living Room)',
        before: '/src/assets/images/before_after_images/dirty_1.jpeg',
        after: '/src/assets/images/before_after_images/clean_1.jpeg'
    },
    {
        id: 2,
        title: 'Move In / Out (Kitchen)',
        before: '/src/assets/images/before_after_images/dirty_2.jpeg',
        after: '/src/assets/images/before_after_images/clean_2.jpeg'
    }
];

export default function ResultsPage() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div className="min-h-screen bg-brand-light pt-24 pb-16">
            <div className="container-max" ref={ref}>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-brand-cyan text-sm font-semibold uppercase tracking-widest mb-3">Our Work</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-brand-blue mb-6">Before & After Results</h1>
                    <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                        See the Melvy Kleen difference. Real transformations from our satisfied clients.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {resultImages.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isVisible ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white rounded-[2rem] p-6 shadow-xl border border-brand-cyan/10"
                        >
                            <h3 className="text-xl font-bold text-brand-blue mb-6 text-center">{item.title}</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Before */}
                                <div className="space-y-3">
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group bg-slate-100">
                                        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg">
                                            Before
                                        </div>
                                        <img
                                            src={item.before}
                                            alt={`Before ${item.title}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* After */}
                                <div className="space-y-3">
                                    <div className="aspect-[4/3] rounded-2xl overflow-hidden relative group bg-slate-100">
                                        <div className="absolute top-4 left-4 z-10 bg-green-500 text-white text-xs font-bold uppercase tracking-widest py-1.5 px-3 rounded-full shadow-lg">
                                            After
                                        </div>
                                        <img
                                            src={item.after}
                                            alt={`After ${item.title}`}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <h3 className="text-2xl font-bold text-brand-blue mb-6">Ready to see your space transform?</h3>
                    <a href="/booking" className="btn-primary inline-flex">Book Your Cleaning Now</a>
                </motion.div>

            </div>
        </div>
    );
}
