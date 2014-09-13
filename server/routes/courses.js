/* jshint node:true */
'use strict';

var Course = require('../model/Course');

module.exports = function (app, run) {
  Course.init(run);

  app.get('/courses', function*() {
      this.body = yield Course.findAll();
  });
};
