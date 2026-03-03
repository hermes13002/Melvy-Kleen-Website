import { useState } from 'react';
import type { BookingFormData } from '../../types';

// step 3 — contact and address form with validation
interface Props {
    data: Pick<BookingFormData, 'address' | 'city' | 'postcode' | 'fullName' | 'phone' | 'email'>;
    onChange: (field: keyof BookingFormData, value: string) => void;
    onSubmit: () => void;
    onBack: () => void;
}

type Errors = Partial<Record<keyof Props['data'], string>>;

function validate(data: Props['data']): Errors {
    const errs: Errors = {};
    if (!data.fullName.trim()) errs.fullName = 'Full name is required';
    if (!data.phone.trim()) errs.phone = 'Phone number is required';
    else if (!/^\+?[0-9\s\-]{7,15}$/.test(data.phone)) errs.phone = 'Enter a valid phone number';
    if (!data.email.trim()) errs.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Enter a valid email address';
    if (!data.address.trim()) errs.address = 'Street address is required';
    if (!data.city.trim()) errs.city = 'City is required';
    return errs;
}

export default function StepThree({ data, onChange, onSubmit, onBack }: Props) {
    const [errors, setErrors] = useState<Errors>({});
    const [touched, setTouched] = useState<Partial<Record<keyof Props['data'], boolean>>>({});

    const handleBlur = (field: keyof Props['data']) => {
        setTouched((prev) => ({ ...prev, [field]: true }));
        const errs = validate(data);
        setErrors(errs);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const allTouched = Object.keys(data).reduce((acc, k) => ({ ...acc, [k]: true }), {});
        setTouched(allTouched as typeof touched);
        const errs = validate(data);
        setErrors(errs);
        if (Object.keys(errs).length === 0) onSubmit();
    };

    const fieldClass = (field: keyof Props['data']) =>
        `input-field ${touched[field] && errors[field] ? 'input-error' : ''}`;

    return (
        <div>
            <h2 className="text-2xl font-bold text-brand-blue mb-2">Your Details</h2>
            <p className="text-gray-500 text-sm mb-8">Tell us where to come and how to reach you.</p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {/* personal info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="fullName" className="block text-xs font-medium text-gray-600 mb-1">
                            Full Name <span className="text-red-400">*</span>
                        </label>
                        <input
                            id="fullName"
                            type="text"
                            autoComplete="name"
                            value={data.fullName}
                            onChange={(e) => onChange('fullName', e.target.value)}
                            onBlur={() => handleBlur('fullName')}
                            className={fieldClass('fullName')}
                            placeholder="Jane Doe"
                            aria-invalid={!!(touched.fullName && errors.fullName)}
                            aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                        />
                        {touched.fullName && errors.fullName && (
                            <p id="fullName-error" className="text-red-400 text-xs mt-1">{errors.fullName}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-xs font-medium text-gray-600 mb-1">
                            Phone <span className="text-red-400">*</span>
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            autoComplete="tel"
                            value={data.phone}
                            onChange={(e) => onChange('phone', e.target.value)}
                            onBlur={() => handleBlur('phone')}
                            className={fieldClass('phone')}
                            placeholder="+234 800 000 0000"
                            aria-invalid={!!(touched.phone && errors.phone)}
                            aria-describedby={errors.phone ? 'phone-error' : undefined}
                        />
                        {touched.phone && errors.phone && (
                            <p id="phone-error" className="text-red-400 text-xs mt-1">{errors.phone}</p>
                        )}
                    </div>
                </div>

                <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-600 mb-1">
                        Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => onChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={fieldClass('email')}
                        placeholder="jane@example.com"
                        aria-invalid={!!(touched.email && errors.email)}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {touched.email && errors.email && (
                        <p id="email-error" className="text-red-400 text-xs mt-1">{errors.email}</p>
                    )}
                </div>

                {/* address */}
                <div>
                    <label htmlFor="address" className="block text-xs font-medium text-gray-600 mb-1">
                        Street Address <span className="text-red-400">*</span>
                    </label>
                    <input
                        id="address"
                        type="text"
                        autoComplete="street-address"
                        value={data.address}
                        onChange={(e) => onChange('address', e.target.value)}
                        onBlur={() => handleBlur('address')}
                        className={fieldClass('address')}
                        placeholder="12 Adeola Odeku Street"
                        aria-invalid={!!(touched.address && errors.address)}
                        aria-describedby={errors.address ? 'address-error' : undefined}
                    />
                    {touched.address && errors.address && (
                        <p id="address-error" className="text-red-400 text-xs mt-1">{errors.address}</p>
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="city" className="block text-xs font-medium text-gray-600 mb-1">
                            City <span className="text-red-400">*</span>
                        </label>
                        <input
                            id="city"
                            type="text"
                            autoComplete="address-level2"
                            value={data.city}
                            onChange={(e) => onChange('city', e.target.value)}
                            onBlur={() => handleBlur('city')}
                            className={fieldClass('city')}
                            placeholder="Lagos"
                            aria-invalid={!!(touched.city && errors.city)}
                            aria-describedby={errors.city ? 'city-error' : undefined}
                        />
                        {touched.city && errors.city && (
                            <p id="city-error" className="text-red-400 text-xs mt-1">{errors.city}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="postcode" className="block text-xs font-medium text-gray-600 mb-1">
                            Postcode / Area
                        </label>
                        <input
                            id="postcode"
                            type="text"
                            autoComplete="postal-code"
                            value={data.postcode}
                            onChange={(e) => onChange('postcode', e.target.value)}
                            className="input-field"
                            placeholder="101001"
                        />
                    </div>
                </div>

                <div className="flex justify-between pt-2">
                    <button type="button" onClick={onBack} className="btn-outline">
                        ← Back
                    </button>
                    <button type="submit" className="btn-primary">
                        Confirm Booking ✓
                    </button>
                </div>
            </form>
        </div>
    );
}
