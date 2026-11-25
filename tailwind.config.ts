import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Near-black, slightly cool neutrals
        space: {
          900: '#050607',
          800: '#0a0c0e',
          700: '#101315',
          600: '#161a1d',
          500: '#1f2428',
        },
        // HUD signal colour: a single teal accent
        hud: {
          DEFAULT: '#6fd6c8',
          light: '#a7efe5',
          dim: '#2b5f59',
        },
        // Legacy accent names, remapped onto the HUD palette so older classes stay on-theme
        accent: {
          blue: '#6fd6c8',
          'blue-light': '#a7efe5',
          violet: '#d9c38f',
          'violet-light': '#ecdcb3',
          cyan: '#6fd6c8',
          'cyan-light': '#a7efe5',
          green: '#6fd6c8',
        },
        // Hairlines and panel fills
        glass: {
          white: 'rgba(8, 10, 12, 0.55)',
          'white-hover': 'rgba(14, 18, 20, 0.7)',
          border: 'rgba(255, 255, 255, 0.09)',
          'border-hover': 'rgba(111, 214, 200, 0.35)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-cosmic': 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0d0d14 100%)',
        'glow-blue': 'radial-gradient(circle, rgba(111, 214, 200, 0.12) 0%, transparent 70%)',
        'glow-violet': 'radial-gradient(circle, rgba(217, 195, 143, 0.12) 0%, transparent 70%)',
        'glow-cyan': 'radial-gradient(circle, rgba(111, 214, 200, 0.12) 0%, transparent 70%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glass-sm': '0 4px 16px 0 rgba(0, 0, 0, 0.25)',
        'glow-blue': '0 0 20px rgba(111, 214, 200, 0.25)',
        'glow-violet': '0 0 20px rgba(217, 195, 143, 0.25)',
        'glow-cyan': '0 0 20px rgba(111, 214, 200, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [typography],
};

export default config;
