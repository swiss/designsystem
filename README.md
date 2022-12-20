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

## Run visual regression testing

```bash
# run Chromatic
$ git checkout main
$ npm run test
```

This will run the test and provide an URL pointing to the Chromatic app. You can learn more about the Chromatic tool at [Chromatic's website.](https://www.chromatic.com/)

If you want to run the test before merging your branches into the `main` branch, you can first check out `stage`, merge your modifications onto this branch, and then run the regression visual test. 




