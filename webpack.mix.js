const { mix } = require('laravel-mix');

const SRC_JS = 'src/js',
      SRC_CSS = 'src/sass',
      SRC_IMAGES = 'src/images-new',
      ASSETS_FOLDER = './wp-content/themes/diversity/assets';

mix.sass(`${SRC_CSS}/style-new.scss`, ASSETS_FOLDER)
   .js(`${SRC_JS}/app.js`, ASSETS_FOLDER)
   .options({
      processCssUrls: false
   })
   .copyDirectory(SRC_IMAGES, `${ASSETS_FOLDER}/images-new`);