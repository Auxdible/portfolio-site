
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
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' }
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        roboto: "var(--font-roboto)",
        montserrat: "var(--font-montserrat)",
        raleway: "var(--font-raleway)",
        lato: "var(--font-lato)",
        cursive: "var(--font-dancing-script)",
        code: "var(--font-source-code-pro)",
        inter: "var(--font-inter)",
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
        loaded: "themeDown 1s ease-in-out 1 forwards",
        marquee: 'marquee 40s linear infinite',
        marquee2: 'marquee2 40s linear infinite'
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
        steam: "#171A21",
        theme: "var(--color-theme)",
        reverse: "var(--color-reverse)",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  safelist: [
    'from-primary',
    'to-secondary',
    "from-primary",
    "to-secondary",
    "border-orange-500",
    "border-sky-500",
    "border-green-500",
    "border-yellow-500",
    "border-red-500",
    "border-gray-500",
    "border-purple-500",
    "border-pink-500"
  ]
}