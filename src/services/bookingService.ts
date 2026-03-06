import { db } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

export interface BookingPayload {
    serviceName: string;
    categoryName: string;
    price: number;
    date: string;
    time: string;
    customerDetails: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        address: string;
        notes?: string;
    };
}

export const createBooking = async (bookingData: BookingPayload) => {
    try {
        const docRef = await addDoc(collection(db, 'bookings'), {
            ...bookingData,
            status: 'pending', // default status
            createdAt: serverTimestamp(),
        });
        return docRef.id;
    } catch (error) {
        console.error('Error adding booking document: ', error);
        throw error;
    }
};
