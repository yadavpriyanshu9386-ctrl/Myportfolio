/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: "#080808",
        neonCyan: "#00f0ff",
        neonPurple: "#7928ca",
      },
    },
  },
  plugins: [],
}