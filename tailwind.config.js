module.exports = {
    content: ['./src/**/*.{njk,md,html}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: "#3B82F6",
                "background-light": "#F9FAFB",
                "background-dark": "#111827",
                "card-light": "#FFFFFF",
                "card-dark": "#1F2937",
                "text-light": "#1F2937",
                "text-dark": "#F9FAFB",
                "subtext-light": "#6B7280",
                "subtext-dark": "#9CA3AF",
                "border-light": "#E5E7EB",
                "border-dark": "#374151"
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            borderRadius: {
                DEFAULT: "0.5rem",
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms')
    ],
}
