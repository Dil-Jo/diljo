/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "one": "#fcf9ee",
        "two": "#023c40",
        "three": "#f6f7ca",
        "four": "#ed6a5a",
        "five": "#c3c8ea",
        "six":"#1e212b",
        "seven":"#f9cec8",
        "eight":"#FFFFFf",
        "nine":"#ebfdfe",
        "ten":"#f0f1fa",
        "eleven":"#212759",
        "twelve":"#cfd3dd",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      }
    }
  },
  plugins: [require("daisyui")]
};
