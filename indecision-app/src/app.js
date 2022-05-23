console.log('App.js is running.')

var appObject = {
    title: "Indecision App.",
    subtitle: "This is some info",
    options: ['One', 'Two']
}
//JSX-      JS XML 
var template = (
    <div>
        <h1>{appObject.title}</h1>
        <p>{appObject.subtitle && appObject.subtitle}</p>
        <p></p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>);

function avalableOptions(options){

}


var user = {
    userName: "Nikola Ninov",
    age: 29,
    userLocation: "Panaguyrishte,Bul",
}
// var userName = "Nikola Ninov";
// var age = 29;
// var userLocation = "Panaguyrishte,Bul";

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}


var templateTwo = (
    <div>
        <h1>{user.userName ? user.userName : 'Anonymous'}</h1>
        {/* <p>Age: {user.age}</p> */}
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {/* <p>Location: {getLocation(user.userLocation)}</p> */}
        {getLocation(user.userLocation)}
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);