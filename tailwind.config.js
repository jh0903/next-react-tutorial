/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: [
    './src/**/**/*.{js,ts,jsx,tsx}', // 적용할 js파일 경로 지정
    './src/app/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      width: {
        192: '44rem',
      },
      colors: {
        'my-color': '#00FF7F',
      },
    },
  },
  plugins: [],
};
