import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutUs() {
    return (
        <section className="min-h-screen pt-32 pb-24 px-4 relative">
            <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 reveal-on-scroll fade-up">
                <h1 className="text-4xl md:text-5xl font-extrabold text-charcoal tracking-tight mb-2">
                    About Us
                </h1>
                <p className="text-gray-body mb-8">Get to know the team behind codeDF.</p>

                <div className="prose prose-lg text-gray-body max-w-none space-y-8">
                    <p>
                        We are a team of passionate developers and designers dedicated to building high-performance landing pages.
                    </p>
                    <p>
                        Our mission is to help businesses convert visitors into customers through speed, design, and psychology.
                    </p>
                </div>
            </div>
        </section>
    );
}
