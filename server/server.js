/* jshint node:true */
'use strict';

var fs = require('fs');
var koa = require('koa');
var config = require('config');
var router = require('koa-router');
var serve = require('koa-static');
var cors = require('koa-cors');
var body = require('koa-body');

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
});

var app = koa();

app.use(serve('./public'));
app.use(cors());
app.use(body());
app.use(router(app));

fs.readdirSync(__dirname + '/routes').forEach(function (filename) {
  if (filename === '.DS_Store') return;
  require('./routes/' + filename)(app, run);
});

app.listen(config.port);
