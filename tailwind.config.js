/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'fundo-principal': '#1A1510',
        'fundo-secundario': '#2C2418',
        'marrom-medio': '#4A3F30',
        'ocre': '#8B7355',
        'areia': '#D4C9B0',
        'areia-clara': '#E8DCC5',
        'creme': '#F5F1EA',
      },
      fontFamily: {
        'cormorant': ['Cormorant Garamond', 'serif'],
        'dm-mono': ['DM Mono', 'monospace'],
      },
      fontWeight: {
        'light': '300',
        'regular': '400',
      },
    },
  },
  plugins: [],
}
