/* jshint node:true */
'use strict';

module.exports = function (app) {
  app.get('/version', function*() {
    this.body = {
      name: 'RethinkU',
      version: '1.0'
    };
  });
};
