var React = require('react');
var $ = require("jquery")

console.log("Check jquery", $)

var MyView = React.createClass({

  getInitialState: function() {
    return {}
  },

  render: function() {
    return (
      <table>
        <tr>
          <td>one</td>
          <td>two</td>
          <td>three</td>
        </tr>
        <tr>
          <td>one</td>
          <td>two</td>
          <td>three</td>
        </tr>
        <tr>
          <td>one</td>
          <td>two</td>
          <td>three</td>
        </tr>
      </table>
    );
  }
});
module.exports = MyView;