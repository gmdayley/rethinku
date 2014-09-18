var $ = require('jquery')
var Promise = require('bluebird')

function CourseService() {
    this.url = "/course"
    this.list = []
}

CourseService.prototype.loadList = function() {
    return $.get(this.url)
    .then(function(data) {
        this.list = data
    }.bind(this))
}

module.exports = CourseService