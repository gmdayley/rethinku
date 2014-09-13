/* jshint node:true */
'use strict';

var Course = require('../model/Course');

module.exports = function (app, io) {
  app.get('/courses', function*() {
    this.body = yield Course.findAll();
  });

  app.get('/course/:id', function*() {
    this.body = yield Course.findOne(this.params.id);
  });

  app.post('/course', function*() {
    this.body = yield Course.insert(this.request.body);
    io.emit('course:add', this.body);
  });

  app.put('/course/:id', function*() {
    this.body = yield Course.save(this.params.id, this.request.body);
    io.emit('course:edit', this.body);
  });

  app.delete('/course/:id', function*() {
    this.body = yield Course.delete(this.params.id);
    io.emit('course:delete', this.body);
  });
};
