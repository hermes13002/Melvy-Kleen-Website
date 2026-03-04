import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../SectionHeading';

import livingBefore from '../../assets/images/living_before.png';
import livingAfter from '../../assets/images/living_after.png';
import kitchenBefore from '../../assets/images/kitchen_before.png';
import kitchenAfter from '../../assets/images/kitchen_after.png';

const comparisons = [
    {
        id: 'living',
        title: 'Living Room',
        beforeImage: livingBefore,
        afterImage: livingAfter,
        desc: 'Deep cleaning and organization restored this space to its pristine state.'
    },
    {
        id: 'kitchen',
        title: 'Kitchen',
        beforeImage: kitchenBefore,
        afterImage: kitchenAfter,
        desc: 'Grease removal and sparkling surface treatments for a healthy cooking environment.'
    }
];

export default function BeforeAfterSection() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section id="results" className="section-padding bg-brand-light/30">
            <div className="container-max" ref={ref}>
                <SectionHeading
                    label="Visible Results"
                    title="See the Difference We Make"
                    subtitle="Our proven cleaning process delivers stunning transformations every time."
                    align="center"
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12 max-w-6xl mx-auto">
                    {comparisons.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95, y: 30 }}
                            animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-white rounded-[2.5rem] p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group flex flex-col items-center"
                        >
                            <h3 className="text-2xl font-bold text-brand-blue mb-8 text-center">{item.title}</h3>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full mb-8 relative">
                                {/* Before Side */}
                                <div className="flex-1 flex flex-col items-center w-full relative">
                                    <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-3 shadow-inner">
                                        <img src={item.beforeImage} alt={`Before ${item.title}`} className="w-full h-full object-cover filter contrast-75 sepia-[.2] group-hover:filter-none transition-all duration-500" />
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-500 tracking-widest uppercase bg-white/90 px-3 py-1.5 rounded-full absolute top-4 left-4 shadow-sm backdrop-blur-sm border border-white/20">BEFORE</span>
                                </div>

                                {/* Arrow middle */}
                                <div className="absolute left-1/2 top-1/2 -translate-y-[calc(50%+16px)] -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-brand-cyan shadow-lg border-4 border-white text-white flex items-center justify-center group-hover:scale-110 transition-transform hidden sm:flex">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>

                                {/* After Side */}
                                <div className="flex-1 flex flex-col items-center w-full relative mt-6 sm:mt-0">
                                    <div className="w-full aspect-square rounded-[2rem] overflow-hidden mb-3 shadow-md">
                                        <img src={item.afterImage} alt={`After ${item.title}`} className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700" />
                                    </div>
                                    <span className="text-[10px] font-bold text-brand-blue tracking-widest uppercase bg-white/90 px-3 py-1.5 rounded-full absolute top-4 right-4 shadow-sm backdrop-blur-sm border border-white/20">AFTER</span>
                                </div>
                            </div>

                            <p className="text-base text-gray-600 text-center leading-relaxed px-4">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
