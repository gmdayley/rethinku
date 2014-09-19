var React = require('react');

var MyView = React.createClass({
    componentDidMount: function() {

    },

    render: function(){
        return (
          <div>
            This is the main view
            <this.props.activeRouteHandler asdf="woot"/>
          </div>
        );
    }
});
module.exports = MyView;