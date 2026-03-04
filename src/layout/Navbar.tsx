import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/#services' },
    { label: 'Results', href: '/#results' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // close mobile menu on route change
    useEffect(() => setMenuOpen(false), [location]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex items-center justify-between h-16 md:h-20">
                {/* logo */}
                <Link to="/" className="flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-brand-cyan flex items-center justify-center">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                            <path d="M12 2C7 2 3 6.5 3 12c0 4 2 7.5 5 9.5V22h8v-.5c3-2 5-5.5 5-9.5 0-5.5-4-10-9-10z" fill="#004080" />
                            <path d="M9 14s1 1 3 1 3-1 3-1" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </span>
                    <span className={`font-bold text-xl tracking-tight transition-colors duration-300 ${scrolled ? 'text-brand-blue' : 'text-white'}`}>
                        Melvy <span className="text-brand-cyan">Kleen</span>
                    </span>
                </Link>

                {/* desktop nav */}
                <ul className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className={`text-sm font-medium transition-colors duration-200 hover:text-brand-cyan ${scrolled ? 'text-gray-600' : 'text-white/90'
                                    }`}
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* cta */}
                <div className="hidden md:block">
                    <Link to="/booking" className="btn-primary text-white hover:text-white text-sm">
                        Book a Clean
                    </Link>
                </div>

                {/* hamburger */}
                <button
                    className="md:hidden p-2 rounded-full"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    <span className={`block w-6 h-0.5 mb-1.5 transition-all duration-300 ${scrolled ? 'bg-brand-blue' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 mb-1.5 transition-all duration-300 ${scrolled ? 'bg-brand-blue' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 transition-all duration-300 ${scrolled ? 'bg-brand-blue' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </nav>

            {/* mobile drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <ul className="px-4 pb-4 pt-2 space-y-1">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="block py-2.5 px-4 text-gray-700 font-medium rounded-full hover:bg-brand-light hover:text-brand-blue transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2">
                                <Link to="/booking" className="btn-primary block text-center text-white hover:text-white text-sm">
                                    Book a Clean
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
