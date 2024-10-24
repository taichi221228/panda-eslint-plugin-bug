# panda-eslint-plugin-bug

This repository demonstrates a bug encountered when using `@pandacss/eslint-plugin` alongside `eslint-plugin-jsx-a11y` in a pnpm environment with ESLint's Flat Config and React. The issue involves an assertion failure in `fsevents` when running ESLint multiple times with the `--cache` option.

An issue has been opened to track this problem: [chakra-ui/eslint-plugin-panda#170](https://github.com/chakra-ui/eslint-plugin-panda/issues/170)

## Environment:

- Node.js: `22.3.0`
- pnpm: `9.12.1`
- ESLint: `^9.13.0`
- `eslint-plugin-react`: `^7.37.2`
- `eslint-plugin-jsx-a11y`: `^6.10.1`
- `@pandacss/eslint-plugin`: `^0.2.0`

## Description:

In a pnpm environment using ESLint's Flat Config with a React setup, I encounter an assertion failure in `fsevents` **when running ESLint multiple times with the `--cache` option**. This occurs specifically when using both `@pandacss/eslint-plugin` and `eslint-plugin-jsx-a11y` together.

## Error Message:

```zsh
eslint --cache .

Assertion failed: (napi_create_external(env, fseenv, fse_environment_destroy, NULL, &result) == napi_ok), function fse_environment_create, file fsevents.c, line 87.
[1]    54618 abort      eslint --cache .
```

## Observations:

- The issue does **not** occur when using either plugin individually.
- When `@pandacss/eslint-plugin` is configured, the error only occurs with the `--cache` option.
- Simply importing `@pandacss/eslint-plugin` without configuring it causes the error, even without the `--cache` option.

---

## Steps to Reproduce:

1. Configure ESLint with `@pandacss/eslint-plugin`:

   ```js
   import pandaPlugin from "@pandacss/eslint-plugin";

   export const pandaConfigs = [
     {
       plugins: { "@pandacss": pandaPlugin },
       rules: pandaPlugin.configs.recommended.rules,
     },
   ];
   ```

2. Run ESLint without cache (No Error):

   ```zsh
   eslint .

   /path/to/src/App.tsx
     8:7  warning  Unnecessary debug utility  @pandacss/no-debug

   ✖ 1 problem (0 errors, 1 warning)
   ```

3. Run ESLint with cache (Error Occurs):

   ```zsh
   eslint --cache .

   /path/to/src/App.tsx
     8:7  warning  Unnecessary debug utility  @pandacss/no-debug

   ✖ 1 problem (0 errors, 1 warning)

   Assertion failed: (napi_create_external(env, fseenv, fse_environment_destroy, NULL, &result) == napi_ok), function fse_environment_create, file fsevents.c, line 87.
    ELIFECYCLE  Command failed.
   [1]    37634 abort      pnpm lint.cache
   ```

4. Importing Without Configuration (Error Occurs Without Cache):

   ```js
   // The error occurs just by importing without setting up the plugin.
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   import pandaPlugin from "@pandacss/eslint-plugin";

   export const pandaConfigs = [];
   ```

   ```zsh
   eslint .

   Assertion failed: (napi_create_external(env, fseenv, fse_environment_destroy, NULL, &result) == napi_ok), function fse_environment_create, file fsevents.c, line 87.
   [1]    37161 abort      eslint .
   ```
