export default function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center px-4 pt-32 relative"
        >
            {/* Hero Content Container */}
            <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
                {/* Headline */}
                <h1 className="text-5xl md:text-7xl font-extrabold text-charcoal tracking-tight text-balance leading-[1.1] reveal-on-scroll fade-up">
                    From Visitor to <br />
                    <span className="text-gradient-premium">Customer</span> – All in One
                    Page.
                </h1>

                {/* Subheadline */}
                <p className="text-lg md:text-xl text-gray-body font-medium max-w-2xl mx-auto text-balance reveal-on-scroll fade-up delay-100">
                    High-speed landing pages. Clean code. More conversions. That&apos;s
                    the <strong>codeDF</strong> difference.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 reveal-on-scroll fade-up delay-200">
                    {/* Primary Action */}
                    <a
                        href="#contact"
                        className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-indigo-brand px-10 font-bold text-white transition-all duration-300 hover:bg-indigo-premium hover:shadow-glow hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
                    >
                        <span className="mr-2">Start Project</span>
                        <svg
                            className="h-5 w-5 transition-transform group-hover:translate-x-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2.5"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>

                    {/* Secondary Action */}
                    <a
                        href="#features"
                        className="inline-flex h-14 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm border border-white/10 px-10 font-bold text-charcoal shadow-sm transition-all duration-300 hover:border-indigo-brand hover:bg-white hover:text-indigo-brand hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-gray-700"
                    >
                        Why Choose Us
                    </a>
                </div>
            </div>

            {/* Bento Grid Decorative Elements (Subtle Background Layers) */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
                <div className="absolute -left-12 top-1/4 w-64 h-64 bg-indigo-brand/20 rounded-3xl shadow-soft transform -rotate-6 opacity-30 animate-float delay-700 blur-3xl"></div>
                <div className="absolute -right-12 bottom-1/4 w-64 h-64 bg-indigo-brand/20 rounded-3xl shadow-soft transform rotate-6 opacity-30 animate-float blur-3xl"></div>
            </div>
        </section>
    );
}
