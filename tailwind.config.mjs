/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				"serif": ['Merriweather','serif'],
				"sans": ["Raleway", 'sans-serif']
			},
			colors: {
				rcabney: '#6c8b6b',
				primaryText: 'rgba(0,0,0,0.8)',
				darkHeading: '#94a3b8'
			},
			screens: {
				'xs': '475px'
			}
		},
	},
	plugins: [],
}
