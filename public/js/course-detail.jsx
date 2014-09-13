var React = require('react');
var $ = require('jquery');

var MyView = React.createClass({
  loadCourseFromServer: function() {
    $.ajax({
      url: '/course/' + this.props.params.courseId,
      dataType: 'json',
      success: function(data) {
        this.setState({ course: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
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
