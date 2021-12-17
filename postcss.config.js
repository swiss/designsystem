module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    ...(process.env.NODE_ENV === 'css'
      ? { tailwindcss: { config: './app/tailwind.config.js' } }
      : {}),
    autoprefixer: {},
  },
};
