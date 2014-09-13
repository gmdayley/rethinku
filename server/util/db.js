/* jshint node:true */
//'use strict';

var config = require('config');
var r = require('rethinkdb');
var Promise = require('bluebird');

// DATABASE CONFIG
var connection = null;

var run = (function () {
  connection = yield r.connect({
    host: config.rethink.host,
    port: config.rethink.port,
    db: config.rethink.db
  });

  return function (query) {
    return new Promise(function (resolve, reject) {
      if (!connection) return reject(new Error("Missing Connection"));
      if (!query) return reject(new Error("Missing Query"));
      query.run(connection, function (err, cursor) {
        if (err) return reject(err);
        if (!cursor) return resolve(cursor);
        if (!cursor.toArray) return resolve(cursor);
        cursor.toArray(function (err, results) {
          if (err) return reject(err);
          resolve(results)
        })
      })
    })
  }
})();


module.exports = {
  run: run,
  connection: connection
};


