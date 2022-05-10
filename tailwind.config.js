const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    corePlugins: {
        container: false,
    },
    content: ["./dist/**/*.{html,js}"],
    theme: {
        screens: Object.fromEntries(
            Object.entries(defaultTheme.screens).filter(
                ([key, value]) => key !== "2xl"
            )
        ),

        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
            "2xl": "1200px",
        },
        extend: {
            container: {
                center: true,
                padding: "15px",
            },

            fontFamily: {
                lato: "Lato, sans-serif",
                poppins: "Poppins, sans-serif",
            },
            spacing: {
                150: "150px",
                5: "5px",
                30: "30px",
                55: "55px",
                155: "155px",
                120: "120px",
                380: "380px",
                25: "25px",
            },
            margin: {
                45: "45px",
                30: "30px",
                20: "20px",
                15: "15px",
                50: "50px",
                120: "120px",
                60: "60px",
                5: "5px",
            },
            padding: {
                25: "25px",
                85: "85px",
                45: "45px",
                90: "90px",
                30: "30px",
                120: "120px",
                50: "50px",
                35: "35px",
                15: "15px",
                70: "70px",
                20: "20px",
            },
            fontSize: {
                38: "38px",
                32: "32px",
                34: "34px",
                22: "22px",
                26: "26px",
                18: "18px",
                15: "15px",
                23: "23px",
                35: "35px",
                30: "30px",
            },
            lineHeight: {
                "extra-loose": "2.8125",
                1.2: "1.2",
                3: "3",
                1.3125: "1.3125",
                3.125: "3.125",
                1.73: "1.73",
                1.3: "1.3",
            },
            borderRadius: {
                60: "60px",
                10: "10px",
            },
            maxWidth: {
                650: "650px",
                155: "155px",
                380: "380px",
            },
            colors: {
                color1: "#fe8464",
                color2: "#fe6e9a",
                color3: "#33c8c1",
                color4: "#119bd2",
                color5: "rgba(255, 255, 255, 0.23)",
                white: "#ffffff",
                dark: "#2E2E2E",
                orange: "#FE7A7B",
                "dark-purple": "#361CC1",
                "dark-grey": "#6A6972",
                "light-grey": "#E1E1E1",
            },
            backgroundSize: {
                200: "200%",
            },
            backgroundImage: {
                banner: "url('images/banner-bg.svg')",
                footer: "url('images/footer-bg.svg')",
            },
            backgroundPosition: {
                "bottom-center": "bottom center",
                "top-center": "background-position: top center;",
            },
            boxShadow: {
                "3xl": "0px 5px 30px 0px rgba(167, 167, 167,  0.16)",
                "4xl": "0px 0px 30px 0px rgba(167, 167, 167, 0.16)",
                "5xl": "0px 0px 18px 0px rgb(50 77 215 / 14%)",
            },
            rotate: {
                25: "25deg",
            },
            gridRow: {
                1: "1",
            },
        },
    },
    plugins: [
        function ({ addComponents }) {
            addComponents({
                ".container": {
                    maxWidth: "100%",
                    padding: "0px 15px",
                    margin: "auto",
                    "@screen sm": {
                        maxWidth: "540px",
                    },
                    "@screen md": {
                        maxWidth: "720px",
                    },
                    "@screen lg": {
                        maxWidth: "960px",
                    },
                    "@screen xl": {
                        maxWidth: "1140px",
                    },
                },
            });
        },
    ],
};
