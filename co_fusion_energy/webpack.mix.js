let mix = require('laravel-mix');
require('laravel-mix-eslint');
require('laravel-mix-clean');

const proxy = 'https://co-fusion-energy.ddev.site/' || null;

/*
 |--------------------------------------------------------------------------
 | DO NOT EDIT BELOW
 |--------------------------------------------------------------------------
 */

mix
  // Scripts
  .ts('sources/ts/general.ts', 'js/general.bundle.js')
  // Styles
  .postCss('sources/css/main.css', 'css/main.css', [
    require('postcss-nested'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ])
  // Run ESLint on every file
  .eslint()
  // Set the public path to the dist folder
  .setPublicPath('dist')
  // BrowserSync
  .browserSync({
    proxy,
    files: ['templates/**/*.{php,twig,html}', 'dist/**/*.{js,css}'],
  })
  // Run default output cleaning
  .clean()
  .sourceMaps()
  // Versioning
  .version()
  .options({
    processCssUrls: false,
  });
