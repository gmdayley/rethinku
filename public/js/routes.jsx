var React = require('react');
var Router = require('react-router')
var view = require('./view.jsx')
var courseDetail = require('./course-detail.jsx')
var two = require('./two.jsx')
var courseList = require('./course-list.jsx')
var notFound = require('./notFound.jsx')

var Route = Router.Route
var Routes = Router.Routes
var DefaultRoute = Router.DefaultRoute
var NotFoundRoute = Router.NotFoundRoute
var Link = Router.Link

module.exports = (
  <Routes>
    <Route name="courses" path="/" handler={view} >
      <Route path=":courseId" handler={courseDetail}/>
      <Route name="two" handler={two} />
	  <DefaultRoute handler={courseList}/>
    </Route >
    <NotFoundRoute handler={notFound} />
  </Routes>
);

