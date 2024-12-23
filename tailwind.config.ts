import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        redColor: 'red',
        blueColor: '#008ded',
      },
      backgroundImage: {
        bgApp1: "url('/images/bg1.png')",
        bgApp2: "url('/images/bg2.png')",
        bgApp3: "url('/images/bg3.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;
