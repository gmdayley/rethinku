var React = require('react');
var $ = require("jquery")
var courseService = require('./course-service')

var MyView = React.createClass({

  getInitialState: function() {
    return {courses:[]}
  },

  componentWillMount: function() {
    courseService.getCourses().then(function(courses) {
      this.setState({courses: courses})
    }.bind(this))
  },

  render: function() {
    var list = this.state.courses.map(function(course) {
      return (
        <CourseListItem 
          key={course.id}
          course={course} 
          onSelect={this.onSelectCourse}/>
      )
    }.bind(this))

    return (
      <div>
        <h3>All Courses: {this.props.asdf}</h3>
        <div>{list}</div>
      </div>
    )
  },

  // looks like you can observe the click as well as change the url
  onSelectCourse: function(course) {
    console.log("SELECTED", course)
  }
});
module.exports = MyView;


var CourseListItem = React.createClass({

  onClick: function() {
    this.props.onSelect(this.props.course)
  },

  render: function() {
    return (
        <div>
          <a href={"/#/course/"+this.props.course.id} onClick={this.onClick}>
            <span>{this.props.course.stem}</span>
            <span>{this.props.course.number}</span>
            <span>{this.props.course.title}</span>
          </a>
        </div>
    )
  }
})
