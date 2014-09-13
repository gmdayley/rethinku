/* jshint node:true */
'use strict';

var Employee = require('../model/employee');

module.exports = function (app, io) {
  app.get('/employee', function*() {
    this.body = yield Employee.findAll();
  });

  app.get('/employee/:id', function*() {
    this.body = yield Employee.findOne(this.params.id);
  });

  app.post('/employee', function*() {
    this.body = yield Employee.insert(this.request.body);
    io.emit('employee:add', this.body);
  });

  app.put('/employee/:id', function*() {
    this.body = yield Employee.save(this.params.id, this.request.body);
    io.emit('employee:edit', this.body);
  });

  app.delete('/employee/:id', function*() {
    this.body = yield Employee.delete(this.params.id);
    io.emit('employee:delete', this.body);
  });
};
