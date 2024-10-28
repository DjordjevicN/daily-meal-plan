module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "var(--brand)",
        brand2: "var(--brand2)",
        dark: "var(--dark)",
        light: "var(--light)",
        textPrimary: "var(--text-primary)",
        textSecondary: "var(--text-secondary)",
        white: "var(--white)",
        salt: "var(--salt)",
      },
      screens: {
        sm: "640px", // Small devices (mobile)
        md: "768px", // Medium devices (tablets)
        lg: "1024px", // Large devices (desktops)
        xl: "1280px", // Extra large devices (large desktops)
        "2xl": "1536px", // Extra extra large devices (wider desktops)
      },
    },
  },
  plugins: [],
};
