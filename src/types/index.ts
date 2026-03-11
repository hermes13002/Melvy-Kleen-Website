// shared ts interfaces

export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
}

export interface Testimonial {
    id: string;
    name: string;
    location: string;
    rating: number;
    quote: string;
    initials: string;
}

export interface BookingFormData {
    service: string;
    date: string;
    time: string;
    address: string;
    city: string;
    postcode: string;
    fullName: string;
    phone: string;
}

export type BookingStep = 1 | 2 | 3 | 'done';
