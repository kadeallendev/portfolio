import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        vulcan: {
          "50": "#acbef1",
          "100": "#a1b5ed",
          "200": "#7ca0e9",
          "300": "#477ae1",
          "400": "#2259bf",
          "500": "#1b4188",
          "600": "#0f2b66",
          "700": "#0b1e46",
          "800": "#09152f",
          "900": "#081021",
          "950": "#060b19",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
