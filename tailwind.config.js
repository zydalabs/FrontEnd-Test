module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  // remove unused styling
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily: {
            'nunito': ['nunito', 'sans-serif']
        },
        fontWeight: {
            light: 300,
            semibold: 600,
            extrabold: 800,
        }
    },
    variants: {
        extend: {}
    },
    plugins: []
};
