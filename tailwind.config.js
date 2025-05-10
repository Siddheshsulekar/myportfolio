/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'space-black': '#050505',
        'space-gray': '#101014',
        'space-blue': '#1a1a2e',
        'neon-blue': '#4361ee',
        'neon-purple': '#7209b7',
        'neon-pink': '#f72585',
        'neon-teal': '#4cc9f0',
        'neon-green': '#06d6a0',
      },
      fontFamily: {
        sans: ['InterVariable', 'sans-serif'],
        mono: ['SpaceMonoVariable', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px rgba(67, 97, 238, 0.7), 0 0 10px rgba(67, 97, 238, 0.5)',
            background: 'rgba(67, 97, 238, 0.1)' 
          },
          '100%': { 
            boxShadow: '0 0 20px rgba(67, 97, 238, 0.9), 0 0 30px rgba(67, 97, 238, 0.7)',
            background: 'rgba(67, 97, 238, 0.2)' 
          },
        },
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(circle at center, #101014 0%, #050505 100%)',
        'neon-gradient': 'linear-gradient(45deg, #4361ee 0%, #7209b7 50%, #f72585 100%)',
      },
    },
  },
  plugins: [],
};