let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.js([
        'assets/js/main.js',
        'assets/js/util.js'

    ], 'dist/app.js')
    .styles('assets/css/main.css', 'dist/app.css')
    .version()
    .setPublicPath('dist');
