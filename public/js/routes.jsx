var React = require('react');
var Router = require('react-router')
var view = require('./view.jsx')
var one = require('./one.jsx')
var two = require('./two.jsx')
var courseList = require('./courses/courseList.jsx')
var notFound = require('./notFound.jsx')

var Route = Router.Route
var Routes = Router.Routes
var DefaultRoute = Router.DefaultRoute
var NotFoundRoute = Router.NotFoundRoute
var Link = Router.Link

module.exports = (
  <Routes>
    <Route name="courses" path="/" handler={view} >
      <Route name="one" handler={one}/>
      <Route name="two" handler={two} />
	  <DefaultRoute handler={courseList}/>
    </Route >
    <NotFoundRoute handler={notFound} />
  </Routes>
);

