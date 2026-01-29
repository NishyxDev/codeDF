"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isExploreOpen, setIsExploreOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const toggleExplore = () => {
        setIsExploreOpen(!isExploreOpen);
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMobileMenuOpen]);

    return (
        <>
            <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
                <div className="glass-nav rounded-full px-8 py-3 flex items-center gap-8 fade-in-up">
                    {/* Left Links */}
                    <div className="hidden md:flex items-center gap-6">
                        {/* Explore Us Dropdown */}
                        <div className="relative group">
                            <button className="text-sm font-bold nav-link flex items-center gap-1 focus:outline-none cursor-pointer">
                                Explore Us
                                <svg
                                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    ></path>
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            <div className="absolute top-full left-0 mt-4 w-48 bg-surface border border-white/10 rounded-2xl shadow-floating opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 overflow-hidden">
                                <div className="py-2">
                                    <Link
                                        href="/gallery"
                                        className="block px-4 py-3 text-sm text-gray-body hover:text-indigo-brand hover:bg-white/5 transition-colors"
                                    >
                                        Gallery
                                    </Link>
                                    <Link
                                        href="/about-us"
                                        className="block px-4 py-3 text-sm text-gray-body hover:text-indigo-brand hover:bg-white/5 transition-colors"
                                    >
                                        About Us
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <Link href="/#features" className="text-sm font-bold nav-link">
                            Features
                        </Link>
                    </div>

                    {/* Brand Logo (Center) */}
                    <Link
                        href="/"
                        className="text-xl font-extrabold tracking-tight text-charcoal hover:scale-105 transition-transform"
                    >
                        codeDF<span className="text-indigo-brand">.</span>
                    </Link>

                    {/* Right Links */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link href="/#pricing" className="text-sm font-bold nav-link">
                            Pricing
                        </Link>
                        <Link href="/#contact" className="text-sm font-bold nav-link">
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        id="mobile-menu-btn"
                        className="md:hidden text-charcoal focus:outline-none"
                        aria-label="Open navigation menu"
                        aria-expanded={isMobileMenuOpen}
                        onClick={toggleMenu}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            ></path>
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                id="mobile-menu"
                className={`fixed inset-0 bg-paper/95 backdrop-blur-xl z-40 transform transition-transform duration-300 flex flex-col items-center justify-center space-y-8 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <button
                    id="close-menu-btn"
                    className="absolute top-8 right-8 text-charcoal"
                    aria-label="Close navigation menu"
                    onClick={toggleMenu}
                >
                    <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>

                {/* Mobile Explore Us */}
                <div className="flex flex-col items-center">
                    <button
                        onClick={toggleExplore}
                        className="text-2xl font-bold text-charcoal hover:text-indigo-brand flex items-center gap-2"
                    >
                        Explore Us
                        <svg
                            className={`w-6 h-6 transition-transform ${isExploreOpen ? "rotate-180" : ""
                                }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>
                    </button>

                    <div
                        className={`flex flex-col items-center space-y-4 overflow-hidden transition-all duration-300 ${isExploreOpen ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                            }`}
                    >
                        <Link
                            href="/gallery"
                            className="text-xl font-medium text-gray-body hover:text-white"
                            onClick={toggleMenu}
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/about-us"
                            className="text-xl font-medium text-gray-body hover:text-white"
                            onClick={toggleMenu}
                        >
                            About Us
                        </Link>
                    </div>
                </div>

                <Link
                    href="/#features"
                    className="text-2xl font-bold text-charcoal hover:text-indigo-brand"
                    onClick={toggleMenu}
                >
                    Features
                </Link>
                <Link
                    href="/#pricing"
                    className="text-2xl font-bold text-charcoal hover:text-indigo-brand"
                    onClick={toggleMenu}
                >
                    Pricing
                </Link>
                <Link
                    href="/#contact"
                    className="text-2xl font-bold text-charcoal hover:text-indigo-brand"
                    onClick={toggleMenu}
                >
                    Contact
                </Link>
            </div>
        </>
    );
}
