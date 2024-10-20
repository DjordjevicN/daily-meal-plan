module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "var(--brand)",
        bgCard: "var(--bgCard)",
        fgCard: "var(--fgCard)",
        paragraph: "var(--paragraph)",
        menuColor: "var(--menuColor)",
        textColor: "var(--textColor)",
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
