/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-image": "url('/dist/img/hero_img_1.png')",
                "facilities-image": "url('/dist/img/facilities.png')",
                "learningkit-image":
                    "url('/dist/img/learning_kit/learningkit_bg.png')",
            },
            fontFamily: {
                primary: "Montserrat, sans-serif",
                secondary: "Inter, sans-serif",
            },
            colors: {
                primary: "#FDD00C",
                purple: "#CDA0CB",
                blue: "#BADCF5",
                green: "#A9DAD7",
                pink: "#FCD0E7",
                grey: "#EEEEEE",
                "grey-2": "#F3F3F3",
                orange: "#F1AD81",
            },
            boxShadow: {
                "product-card": "8px 8px 0px rgba(0, 0, 0, 0.4)",
                "profile-card": "5px 5px 0px #000000",
            },
        },
    },
    plugins: [],
};
