const formatAndLint = ['hover-scripts format', 'hover-scripts lint'];

module.exports = {
  '.github/**/*.yml': 'hover-scripts format',
  './*.config.(js|ts)': formatAndLint,
  './**/*.json5': 'hover-scripts format',
};
