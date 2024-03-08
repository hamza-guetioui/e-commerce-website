import type { Config } from 'tailwindcss'


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minWidth: {
       '1/5': '20%'
      },
      maxWidth: {
        custom : "var(max-w-custom)"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        custom: 'var(--box-shadow-custom)',
      },
      height: {
        custom: 'var(--height-custom)',
      },
    },
  },
  plugins: [],
}
export default config
