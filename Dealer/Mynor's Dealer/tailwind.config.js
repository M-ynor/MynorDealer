
/* eslint-env node */
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
    },
    darkMode: "class",
    colors: {
      "White": "#fffffe",
      "WhiteMynor": "#f8f8f8",
      "BlueMynor": "#100E34",
      "RedMynor": "#a2001d",
      "GrayMynor1": "#d3d5e0",
      "GrayMynor2": "#EAEBF0",
      "GrayMynor3": "#afb1ba",
      "GrayMynor4": "#666872",
    }
  },
  plugins: [
    nextui(),
    require('tailwind-scrollbar')
  ],
}

