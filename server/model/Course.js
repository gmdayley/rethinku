var r = require('rethinkdb');
var db = require('../util/db');

var table = r.table('course');

exports.findOne = function(id) {
    return db.db.run(table.get(id))
}

exports.findAll = function() {
    return db.run(table)
}

exports.insert = function*(item) {
    delete item.id
    var result = yield db.run(table.insert(item))
    return db.toKey(result)
}

exports.save = function(id, item) {
    return db.run(table.get(id).replace(item))
}

exports.delete = function(id) {
    return db.run(table.get(id).delete())
}