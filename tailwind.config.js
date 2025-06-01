module.exports = {
    content: ['./index.html', './src/**/*.{js, tx}'],
    theme: {
        fontFamily: {
            display: ['"Playfair Display"', 'serif'],
            sans: ['"Inter"', 'sans-serif'],
        },
        extend: {
            colors: {
                luxBlack: '#111',
                luxCream: '#f5f3ef',
                luxGold: '#b89b5e',
            },
        },
    },
    plugins: [],
}