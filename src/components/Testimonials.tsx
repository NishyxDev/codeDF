

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-24 px-4 bg-paper overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
                {/* Left Side: Header & Nav */}
                <div className="w-full md:w-1/2 space-y-8 reveal-on-scroll fade-right">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-charcoal tracking-tight leading-tight">
                        From our <br /> community.
                    </h2>
                    <p className="text-xl text-gray-body font-medium max-w-sm">
                        Here’s what other subscribers had to say about codeDF.
                    </p>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4 pt-4">
                        <button
                            aria-label="Previous testimonial"
                            className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-paper hover:border-charcoal transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-charcoal"
                        >
                            <svg
                                className="w-6 h-6 transform rotate-180 transition-transform group-hover:-translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </button>
                        <button
                            aria-label="Next testimonial"
                            className="w-14 h-14 rounded-full border border-gray-700 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-paper hover:border-charcoal transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-charcoal"
                        >
                            <svg
                                className="w-6 h-6 transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                ></path>
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Right Side: Testimonial Content */}
                <div className="w-full md:w-1/2 reveal-on-scroll fade-left delay-100">
                    <div className="space-y-8">
                        {/* Quote Icon */}
                        <div className="text-indigo-brand">
                            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path>
                            </svg>
                        </div>

                        <p className="text-2xl md:text-3xl text-charcoal font-medium leading-relaxed">
                            Rekaan ini kelihatan kemas dan profesional. Saya suka!
                        </p>

                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-surface border border-white/10 flex items-center justify-center text-indigo-brand shadow-sm ring-4 ring-gray-800">
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </div>
                            <div>
                                <h4 className="font-bold text-charcoal text-lg">Jason Mendoza</h4>
                                <p className="text-gray-body font-medium">Founder, HiveMind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
