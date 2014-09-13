/* jshint node:true */
'use strict';

var Course = require('../model/Course');

module.exports = function (app) {
  app.get('/courses', function*() {
    this.body = yield Course.findAll();
  });
};
