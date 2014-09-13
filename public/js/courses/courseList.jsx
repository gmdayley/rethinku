var React = require('react');
var $ = require("jquery")

var MyView = React.createClass({

  getInitialState: function() {
    return {courses:[]}
  },

  componentDidMount: function() {
    console.log("MOUNTED")
    var self = this
    $.get("/courses", function(result) {
      console.log("RESULT", result.length)
      self.setState({courses:result})
    })
  },

  render: function() {

    var list = this.state.courses.map(function(course) {
      return (
        <div>
          <a href="/courses/1234">
            <span>{course.stem}</span>
            <span>{course.number}</span>
          </a>
        </div>
      )
    })


    return (
      <div>
        <h3>Courses</h3>
        <div>{list}</div>
      </div>
    )

    // return (
    //   <h3>Courses</h3>
    //   <table>
    //     <tr>
    //       <td>one</td>
    //       <td>two</td>
    //       <td>three</td>
    //     </tr>
    //     <tr>
    //       <td>one</td>
    //       <td>two</td>
    //       <td>three</td>
    //     </tr>
    //     <tr>
    //       <td>one</td>
    //       <td>two</td>
    //       <td>three</td>
    //     </tr>
    //   </table>
    // );
  }
});
module.exports = MyView;