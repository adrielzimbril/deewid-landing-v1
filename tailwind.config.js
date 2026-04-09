/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./*.html"],
    theme: {
        screens: {
            sm: "576px",
            // => @media (min-width: 576px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "992px",
            // => @media (min-width: 992px) { ... }

            xl: "1200px",
            // => @media (min-width: 1200px) { ... }

            xxl: "1400px",
            // => @media (min-width: 1400px) { ... }
        },
        extend: {
            fontFamily: {
                // Add your custom fonts
                body: ["Manrope", "sans-serif"],
            },

            colors: {
                colorCodGray: "#0A0A0A",
                colorOrangyRed: "#64E870",
                colorLinenRuffle: "#F3F4F5",
                colorViolet: "#000000",
                colorGreen: "#39FF14",
                transparent: "transparent",
                current: "currentColor",
                white: "#FFFFFF",
                purple: "#8358FF",
                "light-base": "#F5F8FA",
                green: "#10B981",
                gray: "#4B5563",
                orange: "#FEB240",
                red: "#EF4444",
                blue: "#428AF8",
                dark: "#1C263B",
                slate: {
                    base: "#5A5D79",
                    50: "#F4F4F6",
                    100: "#E7E8EC",
                    200: "#C4C5CF",
                    300: "#A1A2B3",
                    400: "#7D7F96",
                    500: "#5A5D79",
                    600: "#363A5D",
                    700: "#131740",
                    800: "#101436",
                    900: "#0D102D",
                },
            },
        },
    },
    plugins: [],
};
