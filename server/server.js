/* jshint node:true */
'use strict';

var koa = require('koa');
var Course = require('./model/Course')

var r = require('rethinkdb')
var db = require('./model/db')

// DATABSE CONNECTION /////////////

var conn = null
function run(query) {
    return db.run(conn, query)
}

r.connect({host:'localhost', port:28015, db:'rethinku'}, function(err, c) {
    conn = c
    Course.init(run)
})

var app = koa();

app.use(function *() {
  this.body = 'Hello World';
});

app.listen(3000);
