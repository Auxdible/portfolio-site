/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: ["Raleway", "sans-serif"]
      },
      animation: {
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        navbarCollapse: "navbarCollapse 0.75s ease-out",
        spin: "spin 2s linear infinite",
        fadeLeft: "fadeLeft 0.75s ease-out 1 forwards",
        fadeRight: "fadeRight 0.75s ease-out 1 forwards",
        fadeLeftDelay1: "fadeLeft 0.75s ease-out 0.25s 1 forwards",
        fadeRightDelay1: "fadeRight 0.75s ease-out 0.25s 1 forwards",
        fadeLeftDelay2: "fadeLeft 0.75s ease-out 0.50s 1 forwards",
        fadeRightDelay2: "fadeRight 0.75s ease-out 0.50s 1 forwards",
        fadeLeftDelay3: "fadeLeft 0.75s ease-out 0.75s 1 forwards",
        fadeRightDelay3: "fadeRight 0.75s ease-out 0.75s 1 forwards",
      },
      colors: {
        discord: "#7289da",
        youtube: "#FF0000",
        linkedin: "#0A66C2",
        instagram1: "#405DE6",
        instagram2: "#E1306C",
        instagram3: "#F77737",
        twitch: "#9146FF",
        steam: "#171A21"
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
