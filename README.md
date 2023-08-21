# Design System for the Swiss Confederation

## Purpose

Delivering HTML structures, CSS assets and design elements to build frontends for the Swiss Administration websites.

## Content

- A storybook application presenting assets, components and layouts in isolation mode.
- A Nuxt application on which Storybook is based on
- A Figma Library containing design assets, components and layout examples

## Project installation

```bash
# install dependencies
$ npm install
```

Adapt your Node version to `^16.13.2`, for example using `nvm`:

```bash
# Choose the right Node version
$ nvm use 16
```

## Run Storybook

```bash
# serve Storybook with hot reload
$ npm run dev

# or
$ npm run dev:storybook
```

## Run Nuxt application

```bash
# serve Nuxt application with hot reload
$ npm run dev:nuxt
```

## Run both Storybook and Nuxt

```bash
# serve both Storybook and Nuxt application
$ npm run dev:all
```

## Build Storybook

```bash
# build Storybook
$ npm run build
```

## Build CSS only

```bash
# build Storybook
$ npm run build-css
```

# How to release

- Edit the `package.json` file and increment the `version` of the package, for example `1.0.0`
- Create and publish a new tag with the same version number as the one in the `package.json` file, with a `v` prefix, for example `v1.0.0`
- Create a new release on Github, document your changes, and name it for example ` Release 1.0.0`

## CSS files

When a new `version` is pushed on the `main` branch, this will trigger the generation of a a new CSS file on the CDN.

If the version is `1.0.0`, the CSS file will be delivered at
`https://liip-bund-ds.fra1.digitaloceanspaces.com/v1.0.0/main.css`.

The latest version of the CSS file will be available at
`https://liip-bund-ds.fra1.digitaloceanspaces.com/latest/main.css`.

# Run visual regression testing

```bash
# run Chromatic
$ git checkout main
$ npm run test
```

This will run the test and provide an URL pointing to the Chromatic app. You can learn more about the Chromatic tool at [Chromatic's website.](https://www.chromatic.com/)

If you want to run the test before merging your branches into the `main` branch, you can first check out `stage`, merge your modifications onto this branch, and then run the regression visual test.
