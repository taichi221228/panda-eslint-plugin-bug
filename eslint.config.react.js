import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export const reactConfigs = [
	reactPlugin.configs.flat.recommended,
	reactPlugin.configs.flat["jsx-runtime"],
	{
		plugins: { "react-hooks": reactHooksPlugin },
		rules: reactHooksPlugin.configs.recommended.rules,
	},
	jsxA11yPlugin.flatConfigs.recommended,
];
