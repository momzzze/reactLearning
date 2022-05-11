'use strict';

console.log('App.js is running.');

//JSX-      JS XML 
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This was changed again.'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item One'
        ),
        React.createElement(
            'li',
            null,
            'Item Two'
        )
    )
);

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Nikola Ninov'
    ),
    React.createElement(
        'p',
        null,
        'Age: 29'
    ),
    React.createElement(
        'p',
        null,
        'Location: Panaguyrishte,Bul'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
