import { Link } from 'react-router-dom';

export default function HeroSection() {
    return (
        <section className="relative min-h-screen bg-white overflow-hidden flex items-center">
            {/* decorative shapes */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-cyan/10" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-cyan/5" />
                {/* diagonal stripe accent */}
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-brand-cyan/5 to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full pt-24 pb-16">
                <div className="w-full">
                    {/* text content */}
                    <div className="w-full">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-blue leading-[1.1] mb-6 max-w-5xl">
                            Experience the{' '}
                            <span className="text-brand-cyan">Art of Luxury</span>{' '}
                            Cleaning
                        </h1>

                        <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-3xl">
                            We offer premium cleaning services for homes, offices, and special events.
                            Sit back while the Melvy Kleen team transforms your space.
                        </p>

                        <div className="flex flex-wrap gap-4 w-full">
                            <Link to="/booking" className="btn-primary text-base text-white hover:text-white px-8 py-3.5">
                                Book a Clean
                            </Link>
                            {/* <Link to="/results" className="btn-outline text-base px-8 py-3.5 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white">
                                See Our Work
                            </Link> */}
                        </div>

                        {/* trust badges */}
                        <div className="mt-10 flex flex-wrap items-center gap-6">
                            {[
                                { value: '100+', label: 'Satisfied Clients' },
                                { value: '4.9★', label: 'Average Rating' },
                                { value: '2y+', label: 'Experience' },
                            ].map((stat) => (
                                <div key={stat.label} className="text-center">
                                    <p className="text-2xl font-bold text-brand-blue">{stat.value}</p>
                                    <p className="text-slate-500 text-xs font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* bottom spacing since section doesn't have a wave anymore */}
            <div className="h-12 md:h-16" />
        </section>
    );
}
