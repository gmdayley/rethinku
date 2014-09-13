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
    yield Course.insert(this.request.body);
  });

  app.put('/course/:id', function*() {
    yield Course.save(this.params.id, this.request.body);
  });

  app.delete('/course/:id', function*() {
    yield Course.delete(this.params.id);
  });
};
