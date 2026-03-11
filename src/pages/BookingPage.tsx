import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import ProgressBar from '../components/booking/ProgressBar';
import StepOne from '../components/booking/StepOne';
import StepTwo from '../components/booking/StepTwo';
import StepThree from '../components/booking/StepThree';
import SuccessScreen from '../components/booking/SuccessScreen';
import type { BookingFormData, BookingStep } from '../types';

const initialForm: BookingFormData = {
    service: '',
    date: '',
    time: '',
    address: '',
    city: '',
    postcode: '',
    fullName: '',
    phone: '',
};

const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

export default function BookingPage() {
    const [step, setStep] = useState<BookingStep>(1);
    const [form, setForm] = useState<BookingFormData>(initialForm);
    const [direction, setDirection] = useState(1);

    const goNext = () => {
        setDirection(1);
        setStep((s) => (s === 1 ? 2 : s === 2 ? 3 : 'done') as BookingStep);
    };

    const goBack = () => {
        setDirection(-1);
        setStep((s) => (s === 2 ? 1 : 2) as BookingStep);
    };

    const setField = (field: keyof BookingFormData, value: string) => {
        setForm((prev) => ({ ...prev, [field]: value }));
    };

    return (
        <div className="min-h-screen bg-brand-light pt-24 pb-16 relative overflow-hidden">
            {/* decorative circles */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-brand-cyan/10 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-brand-blue/5 -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

            <div className="max-w-3xl mx-auto px-4 md:px-8 relative z-10">
                {/* page header */}
                <div className="text-center mb-10">
                    <p className="text-brand-cyan text-xs font-semibold uppercase tracking-widest mb-2">Online Booking</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-blue">Book a Cleaning</h1>
                    <div className="w-12 h-1 bg-brand-cyan rounded-full mx-auto mt-3" />
                </div>

                {/* progress bar — only show during steps 1-3 */}
                {step !== 'done' && <ProgressBar currentStep={step as 1 | 2 | 3} />}

                {/* step card */}
                <div className="bg-white rounded-[2.5rem] shadow-xl p-6 md:p-10 overflow-hidden">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={step}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                        >
                            {step === 1 && (
                                <StepOne
                                    selected={form.service}
                                    onSelect={(s) => setField('service', s)}
                                    onNext={goNext}
                                />
                            )}
                            {step === 2 && (
                                <StepTwo
                                    selectedDate={form.date}
                                    selectedTime={form.time}
                                    onDateChange={(d) => setField('date', d)}
                                    onTimeChange={(t) => setField('time', t)}
                                    onNext={goNext}
                                    onBack={goBack}
                                />
                            )}
                            {step === 3 && (
                                <StepThree
                                    data={form}
                                    onChange={setField}
                                    onSubmit={goNext}
                                    onBack={goBack}
                                />
                            )}
                            {step === 'done' && <SuccessScreen />}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* reassurance strip */}
                {step !== 'done' && (
                    <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-cyan">
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                <path d="M7 11V7a5 5 0 0110 0v4"></path>
                            </svg>
                            <span>Secure & private</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-cyan">
                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
                            </svg>
                            <span>No-obligation booking</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-cyan">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                            <span>Free consultation</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
