var React = require('react');
var Router = require('react-router')
var view = require('./view.jsx')
var courseDetail = require('./courses/course-detail.jsx')
var two = require('./two.jsx')
var courseList = require('./courses/course-list.jsx')
var notFound = require('./notFound.jsx')

var Route = Router.Route
var Routes = Router.Routes
var DefaultRoute = Router.DefaultRoute
var NotFoundRoute = Router.NotFoundRoute
var Link = Router.Link
var Redirect = Router.Redirect

module.exports = (
  <Routes>
    <Route name="courses" path="/course" handler={view} >
      <Route path="/course/:courseId" handler={courseDetail}/>
      <DefaultRoute handler={courseList}/>
    </Route>
    <Redirect path="/" to="/course" />
    <NotFoundRoute handler={notFound} />
  </Routes>
);

