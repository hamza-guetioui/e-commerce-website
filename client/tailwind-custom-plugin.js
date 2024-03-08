module.exports = function ({ addUtilities }) {
  const flexCenter = {
    '.flex-center': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    // Add more custom utilities as needed
  };

  addUtilities(newUtilities, ['responsive', 'hover']);
};