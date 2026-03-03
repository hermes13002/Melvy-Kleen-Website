import { useRef, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeading from '../SectionHeading';

export default function BeforeAfterSection() {
    const { ref, isVisible } = useScrollReveal();
    const sliderRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState(50); // percent
    const dragging = useRef(false);

    const move = useCallback((clientX: number) => {
        const el = sliderRef.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98);
        setPosition(pct);
    }, []);

    const onMouseDown = () => { dragging.current = true; };
    const onMouseMove = (e: MouseEvent) => { if (dragging.current) move(e.clientX); };
    const onMouseUp = () => { dragging.current = false; };
    const onTouchMove = (e: TouchEvent) => { move(e.touches[0].clientX); };

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseup', onMouseUp);
        window.addEventListener('touchmove', onTouchMove, { passive: true });
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', onTouchMove);
        };
    });

    return (
        <section id="results" className="section-padding bg-brand-light">
            <div className="container-max" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <SectionHeading
                        label="Visible Results"
                        title="See the Difference We Make"
                        subtitle="Drag the slider to compare before and after our professional cleaning service."
                    />

                    {/* slider container */}
                    <div
                        ref={sliderRef}
                        className="relative w-full max-w-3xl mx-auto rounded-2xl overflow-hidden shadow-2xl cursor-col-resize select-none"
                        style={{ aspectRatio: '16 / 9' }}
                        onMouseDown={onMouseDown}
                        onTouchStart={(e) => move(e.touches[0].clientX)}
                    >
                        {/* before panel — full width dirty room bg */}
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-400 via-gray-300 to-gray-500 flex items-center justify-center">
                            <div className="text-center opacity-40">
                                <p className="text-8xl">🏚️</p>
                                <p className="text-gray-700 font-semibold mt-2">Before</p>
                            </div>
                        </div>

                        {/* after panel — revealed by clip */}
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-brand-cyan/20 via-white to-brand-light flex items-center justify-center overflow-hidden"
                            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
                        >
                            <div className="text-center">
                                <p className="text-8xl">✨</p>
                                <p className="text-brand-blue font-semibold mt-2">After</p>
                            </div>
                        </div>

                        {/* labels */}
                        <span className="absolute top-4 left-4 bg-gray-800/70 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm">
                            BEFORE
                        </span>
                        <span className="absolute top-4 right-4 bg-brand-cyan text-brand-blue text-xs font-semibold px-3 py-1.5 rounded-full">
                            AFTER
                        </span>

                        {/* divider line */}
                        <div
                            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,191,191,0.8)]"
                            style={{ left: `${position}%` }}
                        />

                        {/* drag handle */}
                        <div
                            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white shadow-xl border-2 border-brand-cyan flex items-center justify-center z-10"
                            style={{ left: `${position}%` }}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <path d="M7 10 L3 6 M7 10 L3 14" stroke="#004080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M13 10 L17 6 M13 10 L17 14" stroke="#004080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>

                    {/* helper text */}
                    <p className="text-center text-gray-400 text-sm mt-4">← Drag to compare →</p>
                </motion.div>
            </div>
        </section>
    );
}
