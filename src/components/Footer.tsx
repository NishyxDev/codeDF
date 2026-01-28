import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-paper border-t border-white/5 py-12">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Branding */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-extrabold text-charcoal">
                        codeDF<span className="text-indigo-brand">.</span>
                    </span>
                    <span className="text-xs text-gray-body">|</span>
                    <span className="text-sm text-gray-body">
                        {" "}
                        2026 All Rights Reserved.
                    </span>
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm text-gray-body">
                    <Link
                        href="/privacy-policy"
                        className="hover:text-indigo-brand transition-colors"
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        href="/terms-of-service"
                        className="hover:text-indigo-brand transition-colors"
                    >
                        Terms of Service
                    </Link>
                </div>

                {/* Credits */}
                <div className="text-sm text-gray-body">
                    Designed & Built by{" "}
                    <span className="font-bold text-indigo-brand">codeDF</span>
                </div>
            </div>
        </footer>
    );
}
