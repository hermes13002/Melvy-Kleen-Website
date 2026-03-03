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
    email: '',
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
        <div className="min-h-screen bg-brand-light pt-24 pb-16">
            <div className="max-w-3xl mx-auto px-4 md:px-8">
                {/* page header */}
                <div className="text-center mb-10">
                    <p className="text-brand-cyan text-xs font-semibold uppercase tracking-widest mb-2">Online Booking</p>
                    <h1 className="text-3xl md:text-4xl font-bold text-brand-blue">Book a Cleaning</h1>
                    <div className="w-12 h-1 bg-brand-cyan rounded-full mx-auto mt-3" />
                </div>

                {/* progress bar — only show during steps 1-3 */}
                {step !== 'done' && <ProgressBar currentStep={step as 1 | 2 | 3} />}

                {/* step card */}
                <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 overflow-hidden">
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
                                    data={{
                                        address: form.address,
                                        city: form.city,
                                        postcode: form.postcode,
                                        fullName: form.fullName,
                                        phone: form.phone,
                                        email: form.email,
                                    }}
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
                    <div className="mt-6 flex flex-wrap justify-center gap-6 text-xs text-gray-400">
                        <span>🔒 Secure & private</span>
                        <span>📞 No-obligation booking</span>
                        <span>✅ Free consultation</span>
                    </div>
                )}
            </div>
        </div>
    );
}
