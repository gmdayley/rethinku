var React = require('react');

var MyView = React.createClass({
  render: function(){
    return (
      <div>
        This is the main view
        <this.props.activeRouteHandler/>
      </div>
    );
  }
});
module.exports = MyView;