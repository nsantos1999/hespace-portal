import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/global/**/*.{js,ts,jsx,tsx,mdx}',
    './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          lighter: '#D6ECFA',
          light: '#93C4E8',
          main: '#407398',
          dark: '#335D7E',
          darker: '#2A4D6E',
        },
        error: {
          lighter: '#FDE8E6', // Tom suave de vermelho claro, ótimo para fundos
          light: '#F4B8B5', // Tom um pouco mais intenso
          main: '#E57373', // Cor principal do erro
          dark: '#D32F2F', // Vermelho mais escuro
          darker: '#B71C1C', // Vermelho intenso e fechado
        },
      },
      width: {
        '75': '300px', // Classe personalizada para 300px
      },
      height: {
        '75': '300px', // Classe personalizada para 300px
      },
    },
  },
  plugins: [],
};
export default config;
