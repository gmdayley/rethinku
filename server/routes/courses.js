/* jshint node:true */
'use strict';

var Course = require('../model/Course');

module.exports = function (app, run) {
  app.get('/courses', function*() {
      this.body = yield Course.findAll();
  });
};
