import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F85900',
        'secondary': '#F8C100',
        'light-orange': '#FFB74B',
        'base-grey': '#545454',
        'soft-grey': '#CACACA',
        'light-grey': '#F1F1F1',
        'white-30': 'rgba(255,255,255,0.3)',
        'dark': '#2E2E2E'
      },
      gradientColorStops: {
        'orange': '#F85900',
        'yellow': '#FECB47'
      },
      fontSize: {
        '5xl': '2.5rem'
      }
    },
  },
  plugins: [],
};
export default config;
