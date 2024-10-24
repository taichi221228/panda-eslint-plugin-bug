import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactRefreshPlugin from "eslint-plugin-react-refresh";

export const reactConfigs = [
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat["jsx-runtime"],
	{
		plugins: { "react-hooks": reactHooksPlugin },
		rules: reactHooksPlugin.configs.recommended.rules,
	},
	{
		plugins: { "react-refresh": reactRefreshPlugin },
		rules: { "react-refresh/only-export-components": "warn" },
	},
	jsxA11yPlugin.flatConfigs.recommended,
	{
		files: ["**/*.{js,jsx,ts,tsx}"],
		settings: {
			react: { version: "detect" },
			"import/resolver": { typescript: {} },
		},
	},

];
