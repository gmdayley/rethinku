var gulp = require('gulp')
var browserify = require('gulp-browserify')
var reactify = require('reactify')
var gutil = require('gulp-util')
var rename = require('gulp-rename')

var paths = {
    // css: ['src/css/**/*.styl'],
    // index_js: ['./src/js/index.jsx'],
    index: './public/main.js',
    js: ['./public/*.js'],
    jsx: ['./public/*.jsx']
};

gulp.task('js', function() {
    browserify(paths.index)
        .transform(reactify)
        .bundle()
        .pipe(gulp.source('main.js'))
        .pipe(gulp.dest('./dist'))
})

gulp.task('js', function() {
  var production = gutil.env.type === 'production'

  gulp.src(['public/index.js'], {read: false})

    // Browserify, and add source maps if this isn't a production build
    .pipe(browserify({
      debug: !production,
      transform: ['reactify'],
      extensions: ['.jsx']
    }))

    // .on('prebundle', function(bundler) {
    //   // Make React available externally for dev tools
    //   bundler.require('react');
    // })

    // Rename the destination file
    .pipe(rename('bundle.js'))

    // Output to the build directory
    .pipe(gulp.dest('public/dist/'));
});

gulp.task('watch', function() {
    // gulp.watch(paths.css, ['css']);
    gulp.watch(paths.jsx.concat(paths.js), ['js']);
});
