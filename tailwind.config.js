/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html"],
	theme: {
		extend: {
			colors: {
				primary: {
					purple: "#a535f0",
					"dark-purple": "#8b2fcc",
					orange: "#ff6b35",
					teal: "#009688",
				},
				dark: {
					bg: "#0f1419",
				},
				light: {
					bg: "#f8f9fa",
				},
				text: {
					dark: "#1a1a1a",
					light: "#666666",
				},
				border: {
					color: "#e0e0e0",
				},
			},
			fontFamily: {
				display: ["Playfair Display", "serif"],
				body: ["Poppins", "sans-serif"],
			},
			spacing: {
				xs: "0.5rem",
				sm: "1rem",
				md: "2rem",
				lg: "3rem",
				xl: "4rem",
			},
		},
	},
	plugins: [],
};
