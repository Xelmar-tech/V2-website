/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        conthrax: ['var(--font-conthrax)'],
        syne: ['var(--font-syne)'],
        work: ['var(--font-work)']
      },
      compilerOptions: {
        paths: {
          "@/fonts": ["./styles/fonts"],
        },
      },
      plugins: [],
    },
  },
};
