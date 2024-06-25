
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    
  ],
  darkMode: ['class'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        raleway: "var(--font-raleway)",
        lato: "var(--font-lato)",
        cursive: ["Dancing Script", "sans-serif"],
        code: ["Source Code Pro", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      animation: {
        pulse: "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        navbarCollapse: "navbarCollapse 0.5s ease-out",
        spin: "spin 2s linear infinite",
        expand: "expand 150ms ease-out 1 forwards",
        fadeLeft: "fadeLeft 0.75s ease-out 1 forwards",
        fadeRight: "fadeRight 0.75s ease-out 1 forwards",
        fadeLeftDelay1: "fadeLeft 0.75s ease-out 0.25s 1 forwards",
        fadeRightDelay1: "fadeRight 0.75s ease-out 0.25s 1 forwards",
        fadeLeftDelay2: "fadeLeft 0.75s ease-out 0.50s 1 forwards",
        fadeRightDelay2: "fadeRight 0.75s ease-out 0.50s 1 forwards",
        fadeLeftDelay3: "fadeLeft 0.75s ease-out 0.75s 1 forwards",
        fadeRightDelay3: "fadeRight 0.75s ease-out 0.75s 1 forwards",
        blink: "blink 225ms step-end infinite",
        themeUp: "themeUp 0.5s ease-out 1 forwards",
        themeDown: "themeDown 0.5s ease-out 1 forwards",
        theme2Up: "theme2Up 0.5s ease-out 1 forwards",
        theme2Down: "theme2Down 0.5s ease-out 1 forwards",
        loaded: "themeDown 1s ease-in-out 1 forwards"
      },
      colors: {
        "primary": 'var(--color-primary)',
        "secondary": 'var(--color-secondary)',
        discord: "#5865F2",
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
  safelist: [
    'from-primary',
    'to-secondary'
  ]
}