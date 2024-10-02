const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: ["selector", ".darkMode"],
  safelist: [
    "bg-blue",
    "bg-red",
    "error-primary-20",
    "error-primary",
    "bg-green",
    "bg-yellow",
    "bg-blue20",
    "bg-red-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-fgIcon-200",
    "bg-dev-dark-700",
    "bg-red-100",
    "stroke-danger",
    "stroke-danger-200",
    "stroke-primary",
    "stroke-primary-200",
    "stroke-success",
    "stroke-success-200",
    "stroke-gray",
    "stroke-gray-200",
    "bg-bluePrimary",
    "bg-errorPrimary",
    "bg-successPrimary",
    "bg-warningPrimary",
    "bg-errorPrimary",
    "bg-successPrimary20",
    "bg-warningPrimary20",
    "stroke-errorPrimary20",
    "stroke-errorPrimary",
    "stroke-warningPrimary",
    "stroke-warningPrimary20",
    "stroke-warningPrimary",
    "stroke-warningPrimary20",
    "stroke-successPrimary",
    "stroke-successPrimary20",
    "stroke-bluePrimary",
    "stroke-blue20",
  ],
  devMode: "class",
  theme: {
    extend: {
      keyframes: {
        defaultPulse: {
          "0%": { opacity: "1" },
          "50%": { opacity: "0.5" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "animation-pulse":
          "defaultPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      height: {
        "40px": "40px",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      colors: {
        bgCard: "var(--bg-card)",
        bgSurface: "var(--bg-surface)",
        bgCanvas: "var(--bg-canvas)",
        bgPrimary: "var(--bg-primary)",
        bgSubtle: "var(--bg-subtle)",
        bgDisabled: "var(--bg-disabled)",
        bgDivider: "var(--bg-divider)",
        bgLoading: "var(--bg-loading)",
        bgStroke: "var(--bg-stroke)",
        bgModal: "var(--bg-modal)",
        bgStrokeSecondary: "var(--bg-stroke-secondary)",
        fgPrimary: "var(--fg-primary)",
        fgSecondary: "var(--fg-secondary)",
        fgTertiary: "var(--fg-tertiary)",
        fgDisabled: "var(--fg-disabled)",
        fgIcon: "var(--fg-icon)",
        fgWhite: "var(--fg-white)",
        fgStroke: "var(--fg-stroke)",
        gray900: "var(--gray-900)",
        gray800: "var(--gray-800)",
        gray700: "var(--gray-700)",
        gray600: "var(--gray-600)",
        gray550: "var(--gray-550)",
        gray500: "var(--gray-500)",
        gray400: "var(--gray-400)",
        gray300: "var(--gray-300)",
        gray250: "var(--gray-250)",
        gray200: "var(--gray-200)",
        gray100: "var(--gray-100)",
        white900: "var(--white900)",
        bluePrimary: "var(--blue-primary)",
        blueSecondary: "var(--blue-secondary)",
        blue90: "var(--blue-90)",
        blue80: "var(--blue-80)",
        blue70: "var(--blue-70)",
        blue60: "var(--blue-60)",
        blue50: "var(--blue-50)",
        blue40: "var(--blue-40)",
        blue30: "var(--blue-30)",
        blue20: "var(--blue-20)",
        blue10: "var(--blue-10)",
        errorPrimary: "var(--error-primary)",
        errorPrimary20: "var(--error-primary-20)",
        errorPrimary10: "var(--error-primary-10)",
        warningPrimary: "var(--warning-primary)",
        warningPrimary70: "var(--warning-primary-70)",
        warningPrimary30: "var(--warning-primary-30)",
        warningPrimary20: "var(--warning-primary-20)",
        warningSecondary: "var(--warning-secondary)",
        warningSecondary70: "var(--warning-secondary-70)",
        warningSecondary30: "var(--warning-secondary-30)",
        warningSecondary20: "var(--warning-secondary-20)",
        brandPrimary2: "var(--brand-primary-2)",
        brandPrimary: "var(--brand-primary)",
        brandPrimary90: "var(--brand-primary-90)",
        brandPrimary80: "var(--brand-primary-80)",
        brandPrimary70: "var(--brand-primary-70)",
        brandPrimary60: "var(--brand-primary-60)",
        brandPrimary50: "var(--brand-primary-50)",
        brandPrimary40: "var(--brand-primary-40)",
        brandPrimary30: "var(--brand-primary-30)",
        brandPrimary20: "var(--brand-primary-20)",
        brandPrimary10: "var(--brand-primary-10)",
        successPrimary: "var(--success-primary)",
        successPrimary70: "var(--success-primary-70)",
        successPrimary20: "var(--success-primary-20)",
        successPrimary10: "var(--success-primary-10)",
        purple700: "var(--purple-700)",
        purple70: "var(--purple-70)",
        purple30: "var(--purple-30)",
        purple10: "var(--purple-10)",
        danger: "var(--error-primary)",
        "danger-200": "var(--error-primary-20)",
        primary: "var(--blue-primary)",
        "primary-200": "var(--blue-20)",
        success: "var(--success-primary)",
        "success-200": "var(--success-primary-20)",
        gray: "var(--fg-icon)",
        "gray-200": "var(--fg-icon-20)",
      },
      gridTemplateColumns: {
        11: "repeat(11, minmax(104px, 1fr))",
      },
      letterSpacing: {
        "widest-1": "0.265em",
      },
      fontSize: {
        h1: ["1.5rem", "2.25rem"],
        h2: ["1.125rem", "2rem"],
        h3: ["1rem", "1.5rem"],
        h4: ["0.875rem", "1.5rem"],
        h5: ["0.9rem", "1.5rem"],
        p: ["1rem", "1.5rem"],
        p2: ["0.875rem", "1.5rem"],
        p3: ["0.75rem", "1.125rem"],
        p4: ["0.668rem", "1rem"],
        xxs: "11px",
        "xxs-2": "0.813rem",
      },
      width: {
        100: "26rem",
        34: "8.5rem",
      },
      maxWidth: {
        xxs: "200px",
      },
      spacing: {
        7: "28px",
      },
    },
    screens: {
      xs: "320",
      sm: "640px",
      md: "768px",
      ls: "1024px",
      lg: "1128px",
      xl: "1440px",
      xxl: "1600px",
      high: { raw: "(min-height: 1234px)" },
    },
  },

  variants: {
    extend: {
      backgroundColor: ["active", "hover", "odd"],
      opacity: ["disabled"],
      textColor: ["group-hover"],
      fill: ["hover", "focus"],
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("@tailwindcss/forms"),
    plugin(({ matchUtilities, addBase, theme }) => {
      matchUtilities(
        {
          fill: (value) => {
            return {
              fill: value,
            };
          },
        },
        { values: theme("colors") }
      );
      matchUtilities(
        {
          "grid-area": (value) => {
            return {
              gridArea: value,
            };
          },
        },
        { values: theme("spacing") }
      );
      matchUtilities(
        {
          "grid-template-columns": (value) => {
            return {
              gridTemplateColumns: value.replaceAll("_", " "),
            };
          },
        },
        { values: theme("spacing") }
      );
      addBase({
        code: {},
      });
    }),
  ],
};
