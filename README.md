# React + Vite boilerplate

This is my minimal React boilerplate, focussed on adding functionality fast! No state management, just React, Router and Query.

## Get Started

1. Install [Node 22](https://nodejs.org/en)
2. Install [`pnpm`](https://pnpm.io/installation)
3. If using VSCode, install extensions for ESLint, StyleLint and Prettier. This is not necessary to run this project though.
4. In the project directory, run `pnpm install` to install the necessary project dependencies.

## Run

To run the application in dev mode, run `pnpm dev`. This will start up the development server to host the site on your local machine. It will also enable Hot Module Replacement (HMR) so any code changes will be instantly applied when a file is saved without the need to reload the browser.

To build a bundle for deployment, run `pnpm build`. This will generate and bundle all the assets needed to run the site and place them in the `dist` folder. This can then be served from a web server of your choice.

## Lint

To run the linter, run `pnpm lint`. This will check all code and style files for errors. I recommend using the VSCode extensions' "Fix on Save" features instead but this script is useful for incorporating in pre-commit checks and other parts of the CI/CD pipeline.

## TODO:

- Another version that has state management
- Add example tests
- Add example files to implement the folder structure below

## Folder Structure

Anything that is shipped goes in the `src` folder.

- `assets`: static assets like images
- `components`: global components that are used in multiple places, e.g. forms
- `context`: React context objects
- `features`: a fresh hierarchy of components, hooks, services, assets etc, grouped by feature. Prefer exporting components from each feature from an index.ts file for encapsulation
- `hooks`: global custom React hooks that are used in multiple places
- `layouts`: common layout components e.g. headers, footers
- `pages`: page wrapper components rendered by the router
- `scss`: global Sass variables, mixins and functions used in multiple places
- `utils`: common **small** utility functions. These should be simple **pure** functions

For smaller projects, remove the `features` folder and simply have folders for each page in the `pages` folder with their components.

Everything outside of the `src` folder is configuration with the exception of the `public` folder. Anything placed in here will be made available at the root of the site. Place files like `robots.txt` in here. Files placed in here should NOT be imported into code in `src`.