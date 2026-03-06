import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { collection, query, orderBy, onSnapshot, updateDoc, doc } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase';
import { useAuth } from '../../contexts/AuthContext';

export default function AdminDashboard() {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const [bookings, setBookings] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Listen for realtime booking updates
        const q = query(collection(db, 'bookings'), orderBy('createdAt', 'desc'));

        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const bookingsData: any[] = [];
            querySnapshot.forEach((doc) => {
                bookingsData.push({ id: doc.id, ...doc.data() });
            });
            setBookings(bookingsData);
            setLoading(false);
        }, (error) => {
            console.error("Error fetching bookings: ", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/admin/login');
        } catch (error) {
            console.error("Failed to log out", error);
        }
    };

    const updateStatus = async (id: string, newStatus: string) => {
        try {
            const bookingRef = doc(db, 'bookings', id);
            await updateDoc(bookingRef, {
                status: newStatus
            });
        } catch (error) {
            console.error("Error updating status: ", error);
            alert("Failed to update booking status.");
        }
    };

    // Calculate simple stats
    const totalBookings = bookings.length;
    const pendingBookings = bookings.filter(b => b.status === 'pending').length;
    const completedBookings = bookings.filter(b => b.status === 'completed').length;

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="w-10 h-10 border-4 border-brand-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Top Navigation */}
            <nav className="bg-white shadow-sm px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center text-white font-bold">
                        M
                    </div>
                    <span className="font-bold text-xl text-brand-blue">Admin</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-500 hidden sm:block">
                        {currentUser?.email}
                    </span>
                    <button
                        onClick={handleLogout}
                        className="text-sm text-gray-500 hover:text-brand-blue font-medium transition-colors"
                    >
                        Sign out
                    </button>
                </div>
            </nav>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h1>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-sm font-medium text-gray-500">Total Bookings</h3>
                        <p className="text-3xl font-bold text-brand-blue mt-2">{totalBookings}</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-sm font-medium text-gray-500">Pending Follow-up</h3>
                        <p className="text-3xl font-bold text-amber-500 mt-2">{pendingBookings}</p>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-sm font-medium text-gray-500">Completed</h3>
                        <p className="text-3xl font-bold text-emerald-500 mt-2">{completedBookings}</p>
                    </div>
                </div>

                {/* Bookings Table */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="text-lg font-medium text-gray-900">Recent Bookings</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date/Time</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {bookings.length === 0 ? (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-10 text-center text-sm text-gray-500">
                                            No bookings found yet.
                                        </td>
                                    </tr>
                                ) : (
                                    bookings.map((booking) => (
                                        <tr key={booking.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{booking.date}</div>
                                                <div className="text-sm text-gray-500">{booking.time}</div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {booking.customerDetails?.firstName} {booking.customerDetails?.lastName}
                                                </div>
                                                <div className="text-sm text-gray-500">{booking.customerDetails?.phone}</div>
                                                <div className="text-xs text-gray-400 mt-1 truncate max-w-[200px]">
                                                    {booking.customerDetails?.address}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm text-gray-900">{booking.serviceName}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${booking.status === 'completed' ? 'bg-green-100 text-green-800' :
                                                        booking.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                                                            'bg-amber-100 text-amber-800'
                                                    }`}>
                                                    {booking.status || 'pending'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <select
                                                    className="text-sm border-gray-300 rounded-lg focus:ring-brand-cyan focus:border-brand-cyan"
                                                    value={booking.status || 'pending'}
                                                    onChange={(e) => updateStatus(booking.id, e.target.value)}
                                                >
                                                    <option value="pending">Pending</option>
                                                    <option value="completed">Completed</option>
                                                    <option value="cancelled">Cancelled</option>
                                                </select>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
