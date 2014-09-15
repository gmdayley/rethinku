var React = require('react');
var $ = require("jquery")
var CourseService = require('./courseService')

var MyView = React.createClass({

  getInitialState: function() {
    return {courses:[]}
  },

  componentWillMount: function() {
    // bind the service to our local state
    // alternatively, pass the courses in to this component as props
    this.courses = new CourseService()
    this.courses.loadList().then(function() {
      this.setState({courses: this.courses.list})
    }.bind(this))
  },

  render: function() {
    var list = this.state.courses.map(function(course) {
      return (
        <CourseListItem course={course} />
      )
    })

    return (
      <div>
        <h3>Courses</h3>
        <div>{list}</div>
      </div>
    )
  }
});
module.exports = MyView;



var CourseListItem = React.createClass({
  render: function() {
    return (
        <div>
          <a href={"/#/course/" + this.props.course.id}>
            <span>{this.props.course.stem}</span>
            <span>{this.props.course.number}</span>
            <span>{this.props.course.title}</span>
          </a>
        </div>
    )
  }
})
