var React = require('react')
var routes = require('./routes')
console.log("Loaded Index", routes)
React.renderComponent(routes, document.getElementById('main'))

