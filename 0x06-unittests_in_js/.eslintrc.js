module.exports = {
  env: {
    node: true,  // Allows Node.js global variables like `require`
    mocha: true  // Allows Mocha global variables like `describe`, `it`
  },
  rules: {
    '@typescript-eslint/no-require-imports': 'off', // Disable the rule if you're using TypeScript
    'no-undef': 'off', // Disable undefined variable check for `require`, `describe`, `it`
    'no-console': 'off', // (Optional) Disable no-console rule if you're using console.log
  }
};
B
