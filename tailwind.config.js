export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // White-first palette
        primary: '#1f2937',
        secondary: '#7c6b57',
        accent: '#b5651d',
        surface: '#ffffff',
        background: '#ffffff',
      },
      boxShadow: {
        glow: '0 10px 30px rgba(16,24,40,0.06)',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at 10% 10%, rgba(236,213,202,0.6), transparent 20%), radial-gradient(circle at 90% 20%, rgba(198,223,255,0.5), transparent 18%)',
      },
    },
  },
  plugins: [],
};
