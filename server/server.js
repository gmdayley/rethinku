/* jshint node:true */
'use strict';

var koa = require('koa');
var config = require('config');
var Course = require('./model/Course');
var router = require('koa-router')
var serve = require('koa-static')
var cors = require('koa-cors')
var body = require('koa-body')

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
    console.log("RETHINKDB CONNECTION", err, c)
    conn = c;
    Course.init(run);
});

var app = koa();

app.use(serve("./public"))
app.use(cors())
app.use(body())
app.use(router(app))

app.get('/', function*() {
    this.body = {
        name: "RethinkU",
        version: "1.0"
    }
})

// app.use(function *() {
//   this.body = 'Hello World';
// });

// USERS
app.get('/courses', function*() {
    this.body = yield Course.findAll()
})


app.listen(config.port);
