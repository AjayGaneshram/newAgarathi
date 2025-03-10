module.exports = {
	content: ["./src/**/*.{html,jsx,js}"],
	theme: {
		extend: {
			colors: {
			  primary: "bg-gray-900", // Custom primary color
			  secondary: "#9333EA", // Custom secondary color
			  accent: "#F59E0B", // Custom accent color
			  newPrimary: "#986249"
			},
			fontSize: {
				customLarge: "1.875rem", // Custom text size (30px)
				customSmall: "0.5rem",  // Custom text size (14px)
			  },
		  },
	},
	plugins: [],
}
