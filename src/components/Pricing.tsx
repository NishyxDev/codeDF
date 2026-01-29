export default function Pricing() {
    return (
        <section id="pricing" className="py-24 px-4 relative bg-black/20">
            <div className="max-w-7xl mx-auto space-y-16">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto space-y-4 reveal-on-scroll fade-up">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal tracking-tight">
                        Simple, Transparent <span className="text-indigo-brand">Investment</span>
                    </h2>
                    <p className="text-lg text-gray-body font-medium text-balance">
                        Choose the package that fits your stage. No hidden fees, just pure
                        value.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    {/* Starter Package */}
                    <div className="glass-card rounded-4xl p-8 border border-white/10 relative group reveal-on-scroll fade-up flex flex-col h-full">
                        <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl font-extrabold text-charcoal">
                                From RM299
                            </span>
                        </div>
                        <p className="text-gray-body text-sm mb-8">
                            New businesses, personal brands, simple online presence.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {["Single Page", "Custom Design", "Basic SEO & Performance", "Social Media Integration", "Hosting Included", "1 Revisions", "2-3 Days"].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-sm text-gray-body font-medium">
                                    <svg className="w-5 h-5 text-indigo-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#contact"
                            className="mt-auto block w-full py-4 px-6 text-center text-sm font-bold text-charcoal bg-white/10 hover:border-indigo-brand hover:bg-indigo-brand hover:text-white hover:scale-[1.02] hover:shadow-glow rounded-2xl transition-all border border-white/10"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Professional Package (Recommended) */}
                    <div className="glass-card rounded-4xl p-8 border-2 border-indigo-brand/20 relative transform md:-translate-y-4 z-10 shadow-floating reveal-on-scroll fade-up delay-200 flex flex-col h-full">
                        {/* Badge */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-brand text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide shadow-lg shadow-indigo-500/30">
                            Most Popular
                        </div>

                        <h3 className="text-xl font-bold text-indigo-brand mb-2">
                            Professional
                        </h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-5xl font-extrabold text-charcoal">
                                From RM699
                            </span>
                        </div>
                        <p className="text-gray-body text-sm mb-8">
                            Businesses that want better presentation and higher conversion.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {["Multiple Page", "Custom Design", "Animations & Interactions", "Social Media Integration", "Hosting Included", "1 Revisions", "Days Depending On The Project"].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-sm text-gray-body font-medium">
                                    <svg className="w-5 h-5 text-indigo-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#contact"
                            className="mt-auto block w-full py-4 px-6 text-center text-sm font-bold text-white bg-indigo-brand hover:bg-indigo-premium rounded-2xl shadow-lg shadow-indigo-500/30 transition-all hover:scale-[1.02] hover:shadow-indigo-500/50"
                        >
                            Get Started
                        </a>
                    </div>

                    {/* Service Notes */}
                    <div className="glass-card rounded-4xl p-8 border border-indigo-brand/20 bg-surface relative group reveal-on-scroll fade-up delay-300 flex flex-col h-full">
                        <h3 className="text-xl font-bold text-charcoal mb-4">
                            Important Notes
                        </h3>
                        <p className="text-gray-body text-sm mb-8">
                            Essential details for your project.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {["Domain excluded.", "Client must provide images & text content.", "The completion day is calculated after all materials are received.", "Additional pages incur extra charges.", "50% deposit required before start.", "All these websites are static pages that do not involve databases (back-end)"].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-sm text-gray-body font-medium">
                                    <svg className="w-5 h-5 text-indigo-brand flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#contact"
                            className="mt-auto block w-full py-4 px-6 text-center text-sm font-bold text-indigo-brand bg-transparent border-2 border-indigo-brand/50 hover:border-indigo-brand hover:bg-indigo-brand hover:text-white hover:scale-[1.02] hover:shadow-lg rounded-2xl transition-all"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
