/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html"],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Space Grotesk', 'sans-serif'],
            },
            colors: {
                brand: {
                    cyan: '#06b6d4',
                    dark: '#020617',
                    card: 'rgba(15, 23, 42, 0.6)',
                }
            },
            animation: {
                'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
                'glow': 'glow 3s infinite',
            },
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                glow: {
                    '0%, 100%': { boxShadow: '0 0 15px rgba(6, 182, 212, 0.3)' },
                    '50%': { boxShadow: '0 0 30px rgba(6, 182, 212, 0.6)' },
                }
            }
        }
    },
    plugins: [],
}
