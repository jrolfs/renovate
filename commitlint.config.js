const { scopes } = require('@hover/javascript/api/commit');
const { readdirSync, statSync } = require('fs');
const { join } = require('path');

const presetExpression = /.(json|json5)$/i;
const exclude = ['package.json', 'renovate.json'];

/**
 * Enumerate Renovate presets as commit scopes
 *
 * @param {string} path directory containing presets
 * @returns
 */
const presets = (path = './') =>
  readdirSync(path)
    .filter(
      f =>
        statSync(join(path, f)).isFile() &&
        presetExpression.test(f) &&
        !exclude.includes(f),
    )
    .map(f => f.replace(presetExpression, ''));

module.exports = {
  extends: ['@hover/javascript/commitlint'],
  rules: {
    'scope-enum': [1, 'always', [...presets(), ...scopes.build()]],
  },
};
