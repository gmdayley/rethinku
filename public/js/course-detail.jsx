var React = require('react');

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
    setInterval(this.loadCourseFromServer, this.props.pollInterval);
  },
  render: function(){
    return (
      <div>
        {this.state.course}
      </div>
    );
  }
});
module.exports = MyView;