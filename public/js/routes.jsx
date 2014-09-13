var React = require('react');
var Router = require('react-router')
var view = require('./view.jsx')
var hello = require('./hello.jsx')
var notFound = require('./notFound.jsx')

var Route = Router.Route
var Routes = Router.Routes
var Link = Router.Link

module.exports = (
  <Routes>
    <Route path="/" handler={view} />
    <Route path="/test" handler={hello} />
    <NotFoundRoute handler={notFound} />
  </Routes>
);

