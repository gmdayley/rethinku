var React = require('react');

var MyView = React.createClass({
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