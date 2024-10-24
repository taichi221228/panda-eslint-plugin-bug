import pandaPlugin from "@pandacss/eslint-plugin";

export const pandaConfigs = [
	{
		plugins: { "@pandacss": pandaPlugin },
		rules: pandaPlugin.configs.recommended.rules,
	},
];
