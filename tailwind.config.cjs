/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        neutral: colors.slate,
        primary: colors.purple, 
        secondary: colors.orange,
        accent: colors.fuchsia
      },
      screen: {
        'xs': '420px'
      }
    },
	},
	plugins: [],
}
