var $ = require('jquery')
var Promise = require('bluebird')

function CourseService() {
    this.url = "/course"
    this.list = []
}

CourseService.prototype.getCourses = function() {
    return $.get(this.url)
    .then(function(data) {
        this.list = data
        return this.list
    }.bind(this))
}

CourseService.prototype.getCourse = function(id) {
    // We can either load this from the server, or from a local cache
    return $.ajax({
      url: this.url+'/'+id,
      dataType: 'json',
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }
    });
}

// make a singleton
module.exports = new CourseService()