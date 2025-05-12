const { colors } = require('./packages/ui/styles/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './packages/**/*.{ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                ...colors,
                // We can also add our semantic colors directly
                label: {
                    beginner: {
                        bg: colors.primary[100],
                        text: colors.primary[700],
                        border: colors.primary[200],
                    },
                    intermediate: {
                        bg: colors.secondary[100],
                        text: colors.secondary[700],
                        border: colors.secondary[200],
                    },
                    advanced: {
                        bg: colors.warning[100],
                        text: colors.warning[700],
                        border: colors.warning[200],
                    },
                    expert: {
                        bg: colors.error[100],
                        text: colors.error[700],
                        border: colors.error[200],
                    },
                },
            },
            // ... rest of your theme extension
        },
    },
    // ... rest of your tailwind config
}

