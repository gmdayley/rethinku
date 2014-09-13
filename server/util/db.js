/* jshint node:true */
/* global -Promise */
'use strict';

var config = require('config');
var r = require('rethinkdb');
var Promise = require('bluebird');

// DATABASE CONFIG
var connection = null;
r.connect({
  host: config.rethink.host,
  port: config.rethink.port,
  db: config.rethink.db
}, function (err, conn) {
  connection = conn;
});

function run(query) {
  return new Promise(function (resolve, reject) {
    if (!connection) return reject(new Error('Missing Connection'));
    if (!query) return reject(new Error('Missing Query'));
    query.run(connection, function (err, cursor) {
      if (err) return reject(err);
      if (!cursor) return resolve(cursor);
      if (!cursor.toArray) return resolve(cursor);
      cursor.toArray(function (err, results) {
        if (err) return reject(err);
        resolve(results);
      });
    });
  });
}

function toKey(result) {
  return { id: result.generated_keys[0] };
}

module.exports = {
  run: run,
  toKey: toKey,
  connection: connection
};
