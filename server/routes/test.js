/* jshint node:true */
'use strict';

module.exports = function (app) {
  app.get('/what-is-a-generator', function*() {
    console.log('entered route');
    var test = yield asyncFunc();
    console.log('yielded value: ' + test);
    console.log('exiting route');
    this.body = test;
  });
};

function asyncFunc() {
  var deferred = Promise.defer();
  setTimeout(function () {
    console.log('yielding: bleh');
    deferred.resolve('bleh');
  }, 1000);
  return deferred.promise;
}
