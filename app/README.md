# Installation

```bash
# install dependencies
$ pnpm install
```

## Storybook

```bash
# serve Storybook with hot reload
$ pnpm run storybook

# build Storybook
$ pnpm run build-storybook
```

## Nuxt application

```bash
# serve with hot reload
$ pnpm run dev

# build for production and launch server
$ pnpm run build
$ pnpm run start

# generate static project
$ pnpm run generate
```

For detailed explanation on how Nuxt work, check out [Nuxt.js docs](https://nuxtjs.org).

## Pre-merge on main

Before merging a branch into the main branch for a new release, please follow these steps:

1. Run `pnpm run check` to let prettier check the new code for formatting issues
2. If any issues arise, fix them with `pnpm run check:format:write`
3. Run `pnpm run check:lint` to let eslint check the new code for open bugs or ts problems
4. If any issues arise, fix them automatically with `pnpm run check:lint:fix` or manually (You might also update the eslint config file and add new rules (set to 'off') if you come across something that eslint shouldn't catch).

In general, the rules currently defined in the eslint config file are carefully selected and should be kept in there.
