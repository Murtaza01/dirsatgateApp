/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        slideBg: "url('/images/slider-bg.jpg')",
        navLogo: "url('/images/navLogo.png')",
      },
      backgroundColor: {
        navColor: "#3887BE",
        itemColor: "#86B6F6",
        componentColor: "#B4D4FF",
        bgColor: "#EEF5FF",
      },
      colors: {
        primary: "#B4D4FF",
        secondary: "#3887BE",
        textHoverColor: "#200E3A",
      },
    },
  },
  plugins: [],
};
