var React = require('react');

// I don't know what I think about the name of this file. 
var MyView = React.createClass({
    componentDidMount: function() {

    },

    // note that you can pass properties in here
    render: function(){
        return (
          <div>
            <h1>RethinkU</h1>
            <this.props.activeRouteHandler asdf="woot"/>
          </div>
        );
    }
});
module.exports = MyView;