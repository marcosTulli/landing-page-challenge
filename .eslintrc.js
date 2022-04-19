module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/no-unresolved": 0,
    camelcase: 0,
    "import/extensions": 0,
    quotes: 0,
    "import/prefer-default-export": 0,
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "no-use-before-define": 0,
    "max-len": [0, { code: 120 }],
    "react/function-component-definition": 0,
  },
};
