import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// animated success screen after booking form submission
export default function SuccessScreen() {
    return (
        <div className="flex flex-col items-center justify-center py-16 text-center">
            {/* animated checkmark circle */}
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 14, delay: 0.1 }}
                className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mb-6 shadow-lg"
            >
                <motion.svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    aria-hidden="true"
                >
                    <motion.path
                        d="M12 24l9 9 18-18"
                        stroke="#16a34a"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    />
                </motion.svg>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <h2 className="text-3xl font-bold text-brand-blue mb-3">Booking Confirmed!</h2>
                <p className="text-gray-500 text-base max-w-sm mx-auto mb-2">
                    Your booking request has been received. Our team will contact you within 24 hours to confirm the details.
                </p>
                <p className="text-brand-cyan font-semibold text-sm mb-8">
                    Check your email for a confirmation summary.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                    <Link to="/" className="btn-primary">
                        ← Back to Home
                    </Link>
                    <a href="/#contact" className="btn-outline">
                        Contact Us
                    </a>
                </div>
            </motion.div>
        </div>
    );
}
