export default function Features() {
    return (
        <section id="features" className="py-24 px-4 relative">
            <div className="max-w-7xl mx-auto space-y-24">
                {/* Features Block (Bento Grid) */}
                <div className="space-y-12">
                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto space-y-4 reveal-on-scroll fade-up">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-charcoal tracking-tight">
                            More Than Just a{" "}
                            <span className="text-indigo-brand">Pretty Face</span>
                        </h2>
                        <p className="text-lg text-gray-body font-medium text-balance">
                            Your landing page isn’t decoration — it’s a business asset. We
                            build pages engineered to perform, convert, and scale with your
                            growth.
                        </p>
                    </div>

                    {/* Bento Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1: Performance */}
                        <div className="glass-card p-8 flex flex-col justify-between group rounded-4xl reveal-on-scroll zoom-in">
                            <div className="mb-6">
                                <div className="h-14 w-14 rounded-2xl bg-indigo-brand/10 flex items-center justify-center text-indigo-brand mb-6 group-hover:scale-110 group-hover:bg-indigo-brand group-hover:text-white transition-all duration-300 shadow-sm border border-indigo-brand/20">
                                    <svg
                                        className="w-7 h-7"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-charcoal mb-3">
                                    Ultra-Fast Performance
                                </h3>
                                <p className="text-gray-body font-medium leading-relaxed">
                                    We optimize every element to ensure blazing-fast load times,
                                    better SEO rankings, and lower bounce rates.
                                </p>
                            </div>
                            <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                <div className="bg-indigo-brand h-full w-[98%] shadow-[0_0_10px_rgba(79,70,229,0.5)]"></div>
                            </div>
                        </div>

                        {/* Card 2: Clean Code */}
                        <div className="glass-card p-8 flex flex-col justify-between group rounded-4xl reveal-on-scroll zoom-in delay-100">
                            <div className="mb-6">
                                <div className="h-14 w-14 rounded-2xl bg-indigo-brand/10 flex items-center justify-center text-indigo-brand mb-6 group-hover:scale-110 group-hover:bg-indigo-brand group-hover:text-white transition-all duration-300 shadow-sm">
                                    <svg
                                        className="w-7 h-7"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-charcoal mb-3">
                                    Clean Code & Maintainable
                                </h3>
                                <p className="text-gray-body font-medium leading-relaxed">
                                    Built with modern standards and clean architecture. Semantic
                                    HTML, utility-first CSS, some Framework and maintainable structure make future
                                    updates effortless.
                                </p>
                            </div>
                            <div className="font-mono text-xs text-indigo-300 bg-black/30 p-4 rounded-xl border border-white/5">
                                &lt;div class=&quot;clean-architecture&quot;&gt;...&lt;/div&gt;
                            </div>
                        </div>

                        {/* Card 3: Mobile First */}
                        <div className="glass-card p-8 flex flex-col justify-between group rounded-4xl reveal-on-scroll zoom-in delay-200">
                            <div className="mb-6">
                                <div className="h-14 w-14 rounded-2xl bg-indigo-brand/10 flex items-center justify-center text-indigo-brand mb-6 group-hover:scale-110 group-hover:bg-indigo-brand group-hover:text-white transition-all duration-300 shadow-sm">
                                    <svg
                                        className="w-7 h-7"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        ></path>
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-charcoal mb-3">
                                    Mobile Perfection
                                </h3>
                                <p className="text-gray-body font-medium leading-relaxed">
                                    Designed for the thumb-zone first. Your landing page will feel
                                    smooth, intuitive, and app-like on every screen size.
                                </p>
                            </div>
                            <div className="flex justify-center space-x-2">
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-indigo-brand shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-gray-700"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Workflow Block */}
                <div className="space-y-12">
                    <div className="text-center max-w-3xl mx-auto space-y-4 reveal-on-scroll fade-up delay-100">
                        <h2 className="text-3xl font-bold text-charcoal tracking-tight">
                            Simple Workflow.{" "}
                            <span className="text-indigo-brand">Premium Results.</span>
                        </h2>
                    </div>

                    <div className="relative">
                        {/* Connecting Line (Desktop)*/}
                        <div className="hidden md:block absolute top-1/4 left-0 right-0 h-0.5 bg-gray-800 -translate-y-1/2 z-0 reveal-on-scroll fade-in delay-200"></div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {/* Step 1 */}
                            <div className="text-center group reveal-on-scroll fade-up delay-200">
                                <div className="w-16 h-16 mx-auto bg-surface border-2 border-gray-700 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:shadow-glow group-hover:shadow-indigo-500/50 group-hover:border-indigo-brand group-hover:text-white transition-colors duration-300 relative z-10 text-charcoal">
                                    <span className="text-xl font-bold">01</span>
                                </div>
                                <h4 className="text-lg font-bold text-charcoal mb-2">
                                    Consultant
                                </h4>
                                <p className="text-sm text-gray-body px-4 font-medium">
                                    We discuss your goals, target audience, and business unique
                                    value proposition.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="text-center group reveal-on-scroll fade-up delay-300">
                                <div className="w-16 h-16 mx-auto bg-surface border-2 border-gray-700 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:shadow-glow group-hover:shadow-indigo-500/50 group-hover:border-indigo-brand group-hover:text-white transition-colors duration-300 relative z-10 text-charcoal">
                                    <span className="text-xl font-bold">02</span>
                                </div>
                                <h4 className="text-lg font-bold text-charcoal mb-2">
                                    Wireframe
                                </h4>
                                <p className="text-sm text-gray-body px-4 font-medium">
                                    We design a focused layout optimized for clarity, user flow,
                                    and conversion — before writing a single line of code.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="text-center group reveal-on-scroll fade-up delay-400">
                                <div className="w-16 h-16 mx-auto bg-surface border-2 border-gray-700 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:shadow-glow group-hover:shadow-indigo-500/50 group-hover:border-indigo-brand group-hover:text-white transition-colors duration-300 relative z-10 text-charcoal">
                                    <span className="text-xl font-bold">03</span>
                                </div>
                                <h4 className="text-lg font-bold text-charcoal mb-2">Code</h4>
                                <p className="text-sm text-gray-body px-4 font-medium">
                                    Development with Clean Code and optimized assets
                                    for speed.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="text-center group reveal-on-scroll fade-up delay-500">
                                <div className="w-16 h-16 mx-auto bg-surface border-2 border-gray-700 rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:shadow-glow group-hover:shadow-emerald-500/50 group-hover:border-emerald-500 group-hover:text-white transition-colors duration-300 relative z-10 text-charcoal">
                                    <span className="text-xl font-bold">04</span>
                                </div>
                                <h4 className="text-lg font-bold text-charcoal mb-2">Launch</h4>
                                <p className="text-sm text-gray-body px-4 font-medium">
                                    Final testing, deployment, and your business is ready to
                                    capture leads.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
