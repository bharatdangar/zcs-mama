import {heroui} from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],    
      },
      colors: {
        success: "#00A611",
        grayLighter: "#E2E8F0",
        green: "#35A29F",
        red: "#FF4F6D",
        blue: "#00A6FB",
        orange: "#FF8C42"
      },
      backgroundImage : {
        themeGradient: "linear-gradient(0deg, #C22932 0%, #B30F18 100%)"
      }
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout : {
        radius: {
          small: "5px", // rounded-small
          medium: "10px", // rounded-medium
        },
      },
      themes: {
        light: {
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#C8353D"
            },
            lightGray: "#C4C4C4",   
            background: "#F1F5F9",
            secondary: "#64748B"
          }
        },
        dark: {
          layout: {},
          colors: {}
        },
        
      }
    })
  ],
}

module.exports = config;