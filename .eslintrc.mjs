import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  js.configs.recommended, // Ensures best practices are enforced
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: tsParser, // ✅ Use TypeScript parser
      ecmaVersion: 2022,
      sourceType: "module",
      globals: Object.fromEntries(
        Object.entries({
          ...globals.browser,
          ...globals.node,
        }).map(([key, value]) => [key.trim(), value]) // Remove extra spaces
      ),
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      "no-unused-vars": ["error", { 
        vars: "all", 
        args: "after-used", 
        ignoreRestSiblings: false 
      }],
      "@typescript-eslint/no-unused-vars": ["error", { 
        vars: "all", 
        args: "after-used", 
        ignoreRestSiblings: false 
      }]
    }
  }
];
