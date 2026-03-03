import { useState } from 'react';

// step 2 — date and time picker (ui only)
interface Props {
    selectedDate: string;
    selectedTime: string;
    onDateChange: (d: string) => void;
    onTimeChange: (t: string) => void;
    onNext: () => void;
    onBack: () => void;
}

const TIME_SLOTS = [
    { id: 'morning', label: 'Morning', range: '7:00 AM – 11:00 AM', icon: '🌅' },
    { id: 'afternoon', label: 'Afternoon', range: '12:00 PM – 4:00 PM', icon: '☀️' },
    { id: 'evening', label: 'Evening', range: '5:00 PM – 8:00 PM', icon: '🌆' },
];

function buildCalendar(year: number, month: number) {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return { firstDay, daysInMonth };
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

export default function StepTwo({ selectedDate, selectedTime, onDateChange, onTimeChange, onNext, onBack }: Props) {
    const today = new Date();
    const [viewYear, setViewYear] = useState(today.getFullYear());
    const [viewMonth, setViewMonth] = useState(today.getMonth());

    const { firstDay, daysInMonth } = buildCalendar(viewYear, viewMonth);

    const prevMonth = () => {
        if (viewMonth === 0) { setViewMonth(11); setViewYear((y) => y - 1); }
        else setViewMonth((m) => m - 1);
    };

    const nextMonth = () => {
        if (viewMonth === 11) { setViewMonth(0); setViewYear((y) => y + 1); }
        else setViewMonth((m) => m + 1);
    };

    const selectDay = (day: number) => {
        const d = new Date(viewYear, viewMonth, day);
        if (d < new Date(today.getFullYear(), today.getMonth(), today.getDate())) return;
        onDateChange(`${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`);
    };

    const parsedDate = selectedDate ? new Date(selectedDate + 'T00:00:00') : null;

    const isToday = (day: number) => {
        return today.getDate() === day && today.getMonth() === viewMonth && today.getFullYear() === viewYear;
    };

    const isPast = (day: number) => {
        return new Date(viewYear, viewMonth, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
    };

    const isSelected = (day: number) => {
        return parsedDate?.getDate() === day &&
            parsedDate?.getMonth() === viewMonth &&
            parsedDate?.getFullYear() === viewYear;
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-2">Choose Date & Time</h2>
            <p className="text-gray-500 text-sm mb-8">Pick a preferred date and time slot for your cleaning.</p>

            {/* calendar */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm mb-6">
                {/* month nav */}
                <div className="flex items-center justify-between mb-4">
                    <button
                        type="button"
                        onClick={prevMonth}
                        className="w-8 h-8 rounded-lg border border-gray-100 flex items-center justify-center hover:bg-brand-light transition-colors"
                        aria-label="Previous month"
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M9 11L5 7l4-4" stroke="#004080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <p className="font-semibold text-brand-blue">
                        {MONTHS[viewMonth]} {viewYear}
                    </p>
                    <button
                        type="button"
                        onClick={nextMonth}
                        className="w-8 h-8 rounded-lg border border-gray-100 flex items-center justify-center hover:bg-brand-light transition-colors"
                        aria-label="Next month"
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M5 11l4-4-4-4" stroke="#004080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>

                {/* day headers */}
                <div className="grid grid-cols-7 mb-2">
                    {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                        <div key={d} className="text-center text-xs font-medium text-gray-400 py-1">{d}</div>
                    ))}
                </div>

                {/* day cells */}
                <div className="grid grid-cols-7 gap-1">
                    {/* offset */}
                    {Array.from({ length: firstDay }).map((_, i) => <div key={`e-${i}`} />)}
                    {Array.from({ length: daysInMonth }).map((_, i) => {
                        const day = i + 1;
                        const past = isPast(day);
                        const selected = isSelected(day);
                        const todayDay = isToday(day);
                        return (
                            <button
                                key={day}
                                type="button"
                                onClick={() => selectDay(day)}
                                disabled={past}
                                className={`h-9 w-full rounded-lg text-sm font-medium transition-all duration-150
                  ${selected ? 'bg-brand-cyan text-brand-blue shadow-md scale-105' :
                                        todayDay ? 'border-2 border-brand-cyan text-brand-blue' :
                                            past ? 'text-gray-200 cursor-not-allowed' :
                                                'hover:bg-brand-light text-gray-700'
                                    }`}
                                aria-label={`Select ${MONTHS[viewMonth]} ${day}`}
                                aria-pressed={selected}
                            >
                                {day}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* time slots */}
            <div>
                <p className="text-sm font-semibold text-gray-700 mb-3">Preferred Time Slot</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                    {TIME_SLOTS.map((slot) => (
                        <button
                            key={slot.id}
                            type="button"
                            onClick={() => onTimeChange(slot.id)}
                            className={`p-4 rounded-xl border-2 text-left transition-all duration-200
                ${selectedTime === slot.id
                                    ? 'border-brand-cyan bg-brand-light shadow-md'
                                    : 'border-gray-100 bg-white hover:border-brand-cyan/40'
                                }`}
                            aria-pressed={selectedTime === slot.id}
                        >
                            <p className="text-xl mb-1">{slot.icon}</p>
                            <p className="font-semibold text-sm text-brand-blue">{slot.label}</p>
                            <p className="text-gray-400 text-xs">{slot.range}</p>
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex justify-between">
                <button type="button" onClick={onBack} className="btn-outline">
                    ← Back
                </button>
                <button
                    type="button"
                    onClick={onNext}
                    disabled={!selectedDate || !selectedTime}
                    className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                >
                    Continue →
                </button>
            </div>
        </div>
    );
}
