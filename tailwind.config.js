function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        skin: {
          background1: withOpacityValue('--color-background-1'),
          background2: withOpacityValue('--color-background-2'),
          background3: withOpacityValue('--color-background-3'),
        },
      },
    },
  },
  plugins: [],
};
