const gulp = require('gulp');
const dumber = require('gulp-dumber');
const au2 = require('@aurelia/plugin-gulp').default;
const fs = require('fs');
const babel = require('gulp-babel');
const plumber = require('gulp-plumber');
const merge2 = require('merge2');
const terser = require('gulp-terser');
const gulpif = require('gulp-if');
const del = require('del');
const devServer = require('./dev-server');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const postcssUrl = require('postcss-url');

const isProduction = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test';
const dist = 'dist';

// add this at the top of the file
const purgecss = require("gulp-purgecss");
 
// Read more in https://dumber.js.org
const dr = dumber({
  
  baseUrl: '/' + dist,

  // can turn off cache for production build
  // cache: !isProduction,

  // entry bundle name, dumber default is "entry-bundle"
  entryBundle: 'entry.bundle',

  // Turn on hash for production build
  hash: isProduction,

 

  // Here we skip code splitting in test mode.
  codeSplit: isTest ? undefined : function (moduleId, packageName) {
    // Here for any local src, put into app-bundle
    if (!packageName) return 'app-bundle';
    // The codeSplit func does not need to return a valid bundle name.
    // For any undefined return, dumber put the module into entry bundle,
    // this means no module can skip bundling.
  },

  onManifest: isTest ? undefined : function (filenameMap) {
    // Update index.html entry.bundle.js with entry.bundle.hash...js
    console.log('Update index.html with ' + filenameMap['entry.bundle.js']);
    const indexHtml = fs.readFileSync('_index.html').toString()
      .replace('entry.bundle.js', filenameMap['entry.bundle.js']);

    fs.writeFileSync('index.html', indexHtml);
  }
});

function buildJs(src) {
  return gulp.src(src, { sourcemaps: !isProduction })
    .pipe(gulpif(!isProduction && !isTest, plumber()))
    .pipe(au2())
    .pipe(babel());
}

function buildHtml(src) {
  return gulp.src(src)
    .pipe(gulpif(!isProduction && !isTest, plumber()))
    .pipe(au2());
}



function buildCss(src) {

  return gulp.src(src, { sourcemaps: !isProduction })
    .pipe(postcss([
     
      autoprefixer(),
      require('tailwindcss')('tailwind.config.js'),
      // use postcss-url to inline any image/font/svg.
      // postcss-url by default use base64 for images, but
      // encodeURIComponent for svg which does NOT work on
      // some browsers.
      // Here we enforce base64 encoding for all assets to
      // improve compatibility on svg.
      postcssUrl({ url: 'inline', encodeType: 'base64' })
    ]));
}

function build() {
  // Merge all js/css/html file streams to feed dumber.
  // dumber knows nothing about .ts/.less/.scss/.md files,
  // gulp-* plugins transpiled them into js/css/html before
  // sending to dumber.
  return merge2(
    gulp.src('src/**/*.json'),
    buildJs('src/**/*.js'),
    buildHtml('src/**/*.html'),
    buildCss('src/**/*.css')
  )
    // Note we did extra call `dr()` here, this is designed to cater watch mode.
    // dumber here consumes (swallows) all incoming Vinyl files,
    // then generates new Vinyl files for all output bundle files.
    .pipe(dr())
    // Terser fast minify mode
    // https://github.com/terser-js/terser#terser-fast-minify-mode
    // It's a good balance on size and speed to turn off compress.
    .pipe(gulpif(isProduction, terser({ compress: false })))
    .pipe(gulp.dest(dist, { sourcemaps: isProduction ? false : '.' }));
}

function clean() {
  return del(dist);
}

function clearCache() {
  return dr.clearCache();
}

const serve = gulp.series(
  build,
  function startServer(done) {
    devServer.run({
      open: !process.env.CI,
      port: 9000
    });
    done();
  }
)

// Reload browserSync
function reload(done) {
  console.log('Reloading the browser');
  devServer.reload();
  done();
}

// Watch all files for rebuild and reload browserSync.

function watch() {
  return gulp.watch(["src/**/*", "resources/**/*"], gulp.series(build, reload));
}
const run = gulp.series(clean, serve, watch);

exports.build = build;
exports.clean = clean;
exports['clear-cache'] = clearCache;
exports.run = run;
exports.default = run;

 