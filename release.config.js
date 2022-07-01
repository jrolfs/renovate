module.exports = {
  extends: require.resolve('@hover/javascript/release'),
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
  ],
};
