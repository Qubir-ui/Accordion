/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./node_modules/tw-elements/dist/js/**/*.js"],
    theme: {
        extend: {
            fontFamily: {
                lato: ['Lato']
            },
            lineHeight: {
                '11': '2.75rem',
            },
        },
    },
    plugins: [require("tw-elements/dist/plugin")],
}

