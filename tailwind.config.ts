import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin:{
        "pizza": "222px",
      },
      borderRadius: {
        "tomato": '111px',
      },
    },
  },
  plugins: [],
};
export default config;
