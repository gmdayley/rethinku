/* jshint node:true */
'use strict';

// --- Require Dependencies ----------------------------------------------------

var fs = require('fs');
var koa = require('koa');
var config = require('config');
var router = require('koa-router');
var serve = require('koa-static');
var cors = require('koa-cors');
var body = require('koa-body');

// --- Koa Setup ---------------------------------------------------------------

var app = koa();

app.use(serve('./public'));
app.use(cors());
app.use(body());
app.use(router(app));

// --- Create Servers ----------------------------------------------------------

var server = require('http').Server(app.callback());
var io = require('socket.io')(server);

// --- Load Routes -------------------------------------------------------------

fs.readdirSync(__dirname + '/routes').forEach(function (filename) {
  if (filename === '.DS_Store') return;
  require('./routes/' + filename)(app, io);
});

// --- Listen ------------------------------------------------------------------

server.listen(config.port);
console.log('server listening on port ' + config.port);
