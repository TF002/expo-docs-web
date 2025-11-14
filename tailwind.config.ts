import type { Config } from "tailwindcss";

export default {
    content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            backgroundImage: {
                "custom-gradient": "linear-gradient(16deg, #6EE7B7, #3B82F6, #9333EA)",
            },
            animation: {
                orbit: "orbit calc(var(--duration)*1s) linear infinite",
            },
            keyframes: {
                orbit: {
                    "0%": {
                        transform: "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
                    },
                    "100%": {
                        transform: "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
                    },
                },
            },
            colors: {
                background: "#ffffff",
                foreground: "#171717",
                mainColor: "#3B82F6",
            },
        },
    },
    plugins: [],
} satisfies Config;
