tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            },
            colors: {
                paper: '#020617', // Slate 950 (Deepest Background)
                charcoal: '#F1F5F9', // Slate 100 (Primary Text - inversed from original charcoal)
                indigo: {
                    brand: '#6366F1', // Indigo 500 (Brighter for dark mode)
                    premium: '#4F46E5', // Indigo 600
                    glow: '#818CF8', // Indigo 400 (For glows)
                },
                surface: {
                    DEFAULT: '#0F172A', // Slate 900 (Card Background)
                    highlight: '#1E293B', // Slate 800 (Hover/Highlight)
                },
                gray: {
                    body: '#94A3B8', // Slate 400 (Secondary Text)
                    dark: '#0F172A', // Slate 900 (For inverse elements if needed)
                }
            },
            boxShadow: {
                'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.5)', // Darker soft shadow
                'floating': '0 20px 40px -4px rgba(0, 0, 0, 0.6)', // Darker floating shadow
                'glow': '0 0 25px rgba(99, 102, 241, 0.4)', // Enhanced colored glow
                'neon': '0 0 10px rgba(99, 102, 241, 0.5), 0 0 20px rgba(99, 102, 241, 0.3)', // Neon effect
            },
            borderRadius: {
                '2xl': '1rem',
                '3xl': '1.5rem',
                '4xl': '2.5rem',
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'mesh': 'radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%)',
            }
        }
    }
}
