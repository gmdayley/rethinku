var React = require('react');
var Router = require('react-router')
var view = require('./view.jsx')
var hello = require('./hello.jsx')

var Route = Router.Route
var Routes = Router.Routes
var Link = Router.Link

module.exports = (
  <Routes>
    <Route path="/" handler={view}>
    </Route>
    <Route path="/test" handler={hello}>
    </Route>
  </Routes>
);

