var React = require('react');
var $ = require('jquery');
var courseService = require('./course-service')

var MyView = React.createClass({
  loadCourseFromServer: function() {
    courseService.getCourse(this.props.params.courseId)
    .then(function(data) {
        this.setState({ course: data });
    }.bind(this))
  },
  getInitialState: function() {
    return { course: [] };
  },
  componentDidMount: function() {
    this.loadCourseFromServer();
  },
  render: function(){
    var course = this.state.course;
    return (
      <div>
        <div>
          <span>{course.stem}</span>
          <span>{course.number}</span>
        </div>
        <div>{course.title}</div>
        <div>{course.description}</div>
        <OutcomeItemList outcomes={course.outcomes} />
      </div>
    );
  }
});
module.exports = MyView;

var OutcomeItemList = React.createClass({
  render: function () {
    var list = (this.props.outcomes || []).map(function(outcome) {
      return (
        <li>{outcome}</li>
      )
    })
    return (
      <ul>
        {list}
      </ul>
    )
  }
})
