import type { Config } from 'tailwindcss'

import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      "dark": {
        extend: "dark", // <- inherit default values from dark theme
        colors: {
          background: "#0D001A",
          foreground: "#ffffff",
          focus: "#F182F6",
        },
        layout: {
          disabledOpacity: "0.3",
        },
      },
      "light": {
        extend: "light", // <- inherit default values from light theme
        colors: {
          background: "#ffffff",
          foreground: "#0D001A",
          focus: "#F182F6",
        },
        layout: {
          disabledOpacity: "0.3",
        },
      },
    },
  }),]
}
export default config
