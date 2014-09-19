/* jshint node:true */
'use strict';

var gulp = require('gulp');
var reactify = require('reactify');
var source = require('vinyl-source-stream')
var browserify = require('browserify')
var watchify = require('watchify')
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');
var debug = require('gulp-debug')

var paths = {
  // css: ['src/css/**/*.styl'],
  // index_js: ['./src/js/index.jsx'],
  index: './public/index.js',
  js: ['./public/js/*.js', './public/js/**/*.js'],
  jsx: ['./public/js/*.jsx', './public/js/**/*.jsx']
};



// JAVASCRIPT / REACT / BROWSERIFY Bundling
var jsBundle;
function lazyCreateJSBundle() {
  if (!jsBundle) {
    var production = gutil.env.type === 'production';
    var args = watchify.args
    args.debug = !production
    jsBundle = watchify(browserify(paths.index, args))
    jsBundle.transform(reactify)
  }
  return jsBundle
}

function runJSBundle() {
  gutil.log("JSBundle")
  return lazyCreateJSBundle().bundle()
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/dist'))
    .on('end', function() {
      gutil.log("JSBundle: Done")
    })
}

// compile once
gulp.task('js', function() {
  return runJSBundle()
});

// watch for changes manually. See https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
gulp.task('watch', function() {
  livereload.listen();
  var js = lazyCreateJSBundle()
  js.on('update', function() {
    return runJSBundle() 
    .on('end', function() {
      livereload.changed()
    })
  })
  return runJSBundle()
  // gulp.watch(paths.css, ['css']);
  // gulp.watch(paths.jsx.concat(paths.js), ['js']);
});


var db = require('./server/util/db');
var r = require('rethinkdb');
var config = require('config');
var courseData = require('./data/courses.json');
var employeeData = require('./data/employees.json');

gulp.task('db', function () {
  var dbName = config.rethink.db;
  var courseTable = config.rethink.tables.course;
  var employeeTable = config.rethink.tables.employee;

  // create database
  db.run(r.dbCreate(dbName));

  // create table
  db.run(r.db(dbName).tableCreate(courseTable));
  db.run(r.db(dbName).tableCreate(employeeTable));

  // load data
  db.run(r.db(dbName).table(courseTable).insert(courseData));
  db.run(r.db(dbName).table(employeeTable).insert(employeeData));
});
