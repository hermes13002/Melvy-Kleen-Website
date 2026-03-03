import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFab from '../components/WhatsAppFab';

export default function RootLayout() {
    const { pathname } = useLocation();

    // scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);

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
