// Note: The error occurs just by importing without setting up the plugin.
import pandaPlugin from "@pandacss/eslint-plugin";

export const pandaConfigs = [
	{
		plugins: { "@pandacss": pandaPlugin },
		rules: pandaPlugin.configs.recommended.rules,
	},
];
