/* jshint node:true */
'use strict';

var Course = require('../model/Course');

module.exports = function (app) {
  app.get('/courses', function*() {
    this.body = yield Course.findAll();
  });

  app.get('/course/:id', function*() {
    this.body = yield Course.findOne(this.params.id);
  });

  app.post('/course', function*() {
    console.log(this.body);
    // yield Course.insert();
  });

  app.put('/course', function*() {
    // yield Course.insert()
  });

  app.delete('/course', function*() {
    // whaaa?
  });
};
