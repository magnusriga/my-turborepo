const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

module.exports = {
  extends: [
    "@vercel/style-guide/eslint/node",
    "@vercel/style-guide/eslint/browser",
    "@vercel/style-guide/eslint/typescript",
    "@vercel/style-guide/eslint/react",
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    JSX: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
      exports: {
        // Accepts the same options as the `resolve.exports` package
        // See: https://github.com/lukeed/resolve.exports#optionsunsafe

        // All optional, default values are shown

        // Add "require" field to the conditions
        require: false,
        // Add "browser" field to the conditions
        browser: false,
        // List of additional/custom conditions
        conditions: [],
        // Ignore everything except the `conditions` option
        unsafe: false,
      },
    },
  },
  ignorePatterns: ["node_modules/", "dist/", ".eslintrc.js"],

  rules: {
    // add specific rules configurations here
  },
  overrides: [
    {
      files: ['*.js?(x)', '*.mjs'],
      parser: "@babel/eslint-parser",
      parserOptions: {
        babelOptions: {
          presets: ["@babel/preset-react"],
        },
      },
    },
  ],
};
