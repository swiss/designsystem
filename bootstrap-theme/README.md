# Bootstrap Theme for the Swiss Design System

This directory contains a Bootstrap-based version of the Swiss Design System. It provides a custom stylesheet that overrides Bootstrap's default styles to match the look and feel of the existing design system.

## How to use

### 1. Install Dependencies

This theme uses [Sass](https://sass-lang.com/) to customize Bootstrap. You'll need to install the necessary dependencies to compile the Sass files into CSS.

Navigate to this directory in your terminal and run:

```bash
npm install
```

This will install Bootstrap, Sass, and other required packages listed in `package.json`.

### 2. Build the CSS

To compile the custom stylesheet, run the following command from this directory:

```bash
npm run build:css
```

This will take the `css/custom.scss` file, compile it, and output the final stylesheet to `css/custom.css`.

### 3. View the Demo Pages

The `pages` directory contains demo pages that showcase the custom theme. You can open these HTML files directly in your web browser to see the theme in action.

For example, you can open `pages/detail-page-complex.html` to see a complex page layout with various components.
