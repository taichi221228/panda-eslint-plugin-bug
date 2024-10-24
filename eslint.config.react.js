import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";

export const reactConfigs = [
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat["jsx-runtime"],
	jsxA11yPlugin.flatConfigs.recommended,
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		settings: {
			react: { version: "detect" },
			"import/resolver": { typescript: {} },
		},
	},
];
