console.log("HI")
var React = require('react');
var view = require('./view.jsx'); // need to specify the jsx extension
React.renderComponent(view(), document.getElementById('main'));