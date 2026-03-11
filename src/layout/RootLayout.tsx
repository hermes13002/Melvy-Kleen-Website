import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFab from '../components/WhatsAppFab';

export default function RootLayout() {
    const location = useLocation();

    // scroll to top or specific element on route change
    useEffect(() => {
        const state = location.state as { scrollTo?: string } | null;

        if (state?.scrollTo) {
            setTimeout(() => {
                const element = document.getElementById(state.scrollTo!);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100); // small delay to ensure DOM is ready
        } else if (!location.hash) {
            window.scrollTo({ top: 0, behavior: 'instant' });
        }
    }, [location]);

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <Outlet />
            </main>
            <Footer />
            <WhatsAppFab />
        </div>
    );
}
