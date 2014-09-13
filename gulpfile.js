/* jshint node:true */
'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');
// var reactify = require('reactify');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var livereload = require('gulp-livereload');

var paths = {
  // css: ['src/css/**/*.styl'],
  // index_js: ['./src/js/index.jsx'],
  index: './public/main.js',
  js: ['./public/js/*.js', './public/js/**/*.js'],
  jsx: ['./public/js/*.jsx', './public/js/**/*.jsx']
};

gulp.task('js', function() {
  var production = gutil.env.type === 'production';

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
    .pipe(gulp.dest('public/dist/'))
    .pipe(livereload({auto:false}));
});

gulp.task('watch', function() {
  livereload.listen();
  // gulp.watch(paths.css, ['css']);
  gulp.watch(paths.jsx.concat(paths.js), ['js']);
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
