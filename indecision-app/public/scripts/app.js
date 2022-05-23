"use strict";

console.log('App.js is running.');

var appObject = {
    title: "Indecision App.",
    subtitle: "This is some info",
    options: ['One', 'Two']
    //JSX-      JS XML 
};var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        appObject.title
    ),
    React.createElement(
        "p",
        null,
        appObject.subtitle && appObject.subtitle
    ),
    React.createElement("p", null),
    React.createElement(
        "ol",
        null,
        React.createElement(
            "li",
            null,
            "Item One"
        ),
        React.createElement(
            "li",
            null,
            "Item Two"
        )
    )
);

function avalableOptions(options) {}

var user = {
    userName: "Nikola Ninov",
    age: 29,
    userLocation: "Panaguyrishte,Bul"
    // var userName = "Nikola Ninov";
    // var age = 29;
    // var userLocation = "Panaguyrishte,Bul";

};function getLocation(location) {
    if (location) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            location
        );
    }
}

var templateTwo = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        user.userName ? user.userName : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        user.age
    ),
    getLocation(user.userLocation)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
