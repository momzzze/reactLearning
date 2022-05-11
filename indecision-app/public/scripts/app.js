'use strict';

console.log('App.js is running.');

//JSX-      JS XML 
var template = React.createElement(
  'p',
  null,
  'This was changed again.'
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
