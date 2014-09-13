var React = require('react');
var $ = require("jquery")

var MyView = React.createClass({

  getInitialState: function() {
    return {courses:[]}
  },

  componentDidMount: function() {
    var self = this
    $.get("/course", function(result) {
      self.setState({courses:result})
    })
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
