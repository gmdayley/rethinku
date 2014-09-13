/* jshint node:true */
'use strict';

var config = require('config');
var      r = require('rethinkdb');
var     db = require('../util/db');

// console.log(r);
var table = r.db(config.rethink.db).table(config.rethink.tables.course);

exports.findOne = function(id) {
  return db.run(table.get(id));
};

exports.findAll = function() {
  return db.run(table);
};

exports.insert = function*(item) {
  delete item.id;
  var result = yield db.run(table.insert(item));
  return db.toKey(result);
};

exports.save = function(id, item) {
  item.id = id;
  return db.run(table.get(id).replace(item));
};

exports.delete = function(id) {
  return db.run(table.get(id).delete());
};
