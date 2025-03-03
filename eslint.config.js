import react from "eslint-plugin-react";
import reactNative from 'eslint-plugin-react-native';
import babelParser from "@babel/eslint-parser";
import js from "@eslint/js";
import globals from "globals";
import jest from 'eslint-plugin-jest'

export default [
  js.configs.recommended,
  jest.configs.recommended,
  {
      rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
      },
      plugins: {
        react, 
        reactNative
      },
      settings: {
        "react": {
          "version": "detect"
        }
      },
      languageOptions: {
        parser: babelParser,
        globals: {
          ...globals.reactNative
        },
        parserOptions: {
          ecmaVersion: "latest",
          ecmaFeatures: { jsx: true }
        },
      },
  },

];

// {
//     "plugins": ["react", "react-native"],
//     "settings": {
//       "react": {
//         "version": "detect"
//       }
//     },
//     "extends": ["eslint:recommended", "plugin:react/recommended"],
//     "parser": "@babel/eslint-parser",
//     "env": {
//       "react-native/react-native": true
//     },
//     "rules": {
//       "react/prop-types": "off",
//       "react/react-in-jsx-scope": "off"
//     }
//   }