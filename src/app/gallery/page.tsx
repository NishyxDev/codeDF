import Link from "next/link";

export default function Gallery() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden pt-20">

            {/* Decorative Background Elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-brand/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

            <div className="glass-card max-w-2xl w-full p-8 md:p-16 rounded-3xl text-center relative z-10 border border-white/20 shadow-floating reveal-on-scroll fade-up">

                {/* Animated Icon */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-indigo-brand blur-xl opacity-20 animate-pulse rounded-full"></div>
                        <div className="w-24 h-24 bg-surface border border-white/10 rounded-2xl flex items-center justify-center text-indigo-brand shadow-lg relative z-10 transform rotate-3 hover:rotate-6 transition-transform duration-500">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                            </svg>
                        </div>
                        <div className="w-24 h-24 bg-surface/50 border border-white/5 rounded-2xl absolute top-0 left-0 -z-10 transform -rotate-6 scale-90"></div>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight mb-4 text-balance">
                    Under <span className="text-gradient-premium">Construction</span>
                </h1>

                <p className="text-lg text-gray-body font-medium mb-10 text-balance leading-relaxed">
                    We are currently crafting a gallery of our finest work. <br className="hidden md:block" />
                    Something amazing is coming soon.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-full bg-indigo-brand px-8 font-bold text-white transition-all duration-300 hover:bg-indigo-premium hover:shadow-glow hover:scale-105"
                    >
                        Back to Home
                    </Link>
                </div>
            </div>
        </section>
    );
}
