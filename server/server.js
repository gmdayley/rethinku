/* jshint node:true */
'use strict';

var koa = require('koa');
var config = require('config');
var Course = require('./model/Course');

var r = require('rethinkdb');
var db = require('./model/db');

// DATABSE CONNECTION /////////////

var conn = null;
function run(query) {
    return db.run(conn, query);
}

r.connect({
  host:config.rethink.host,
  port:config.rethink.port,
  db:config.rethink.db
}, function(err, c) {
    conn = c;
    Course.init(run);
});

var app = koa();

app.use(function *() {
  this.body = 'Hello World';
});

app.listen(config.port);
