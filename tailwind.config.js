/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		color: {
			primary: "#01ff76",
			"base-primary": "#494949",
			"base-secondary": "#0d0d0d",
			white: "#ffffff",
		},
		fontSize: {
			normal: "16px",
		},
		fontWeight: {
			normal: 400,
			medium: 500,
			bold: 700,
		},
		fontFamily: {
			sans: ["Inter", "sans-serif"],
		},
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
