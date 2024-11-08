// next.config.js
module.exports = {
  overrides: [
    {
      files: ["next.config.js"],
      rules: {
        "@typescript-eslint/no-require-imports": "off",
      },
    },
  ],
};
