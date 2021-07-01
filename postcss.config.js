module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nested': {},
    ...(process.env.NODE_ENV === 'production'
      ? { tailwindcss: { config: './app/tailwind.config.js' } }
      : {}),
    autoprefixer: {},
  },
};
