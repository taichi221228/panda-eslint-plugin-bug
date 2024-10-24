import globals from "globals";

/**
 * @package
 * @type {import("eslint").Linter.Config[]}
 */
export const nodeConfigs = [
	{
		files: [
			"eslint.config.js",
			"eslint.config.*.js",
			"panda.config.ts",
			"panda.config.*.ts",
			"postcss.config.js",
			"vite.config.ts",
		],
		languageOptions: { globals: { ...globals.node } },
	},
];
