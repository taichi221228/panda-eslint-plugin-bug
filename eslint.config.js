import eslint from "@eslint/js";
import createGitignoreConfig from "eslint-config-flat-gitignore";
import globals from "globals";
import { config as defineConfig, configs } from "typescript-eslint";

import { pandaConfigs } from "./eslint.config.panda.js";
import { reactConfigs } from "./eslint.config.react.js";

const ignoreConfig = createGitignoreConfig();

/** @type import("eslint").Linter.Config */
const jsConfig = {
	...eslint.configs.recommended,
	rules: { "no-unused-vars": ["error", { argsIgnorePattern: "^_" }] },
};

/** @type import("typescript-eslint").ConfigWithExtends[] */
const tsConfigs = [
	...configs.recommended,
	{
		rules: {
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_" },
			],
		},
	},
];

const basicConfig = {
	languageOptions: {
		globals: { ...globals.browser, ...globals.commonjs },
		ecmaVersion: "latest",
		sourceType: "module",
		parserOptions: { ecmaFeatures: { jsx: true } },
	},
};

export default defineConfig(
	ignoreConfig,
	jsConfig,
	...tsConfigs,
	basicConfig,
	...reactConfigs,
	...pandaConfigs,
);
