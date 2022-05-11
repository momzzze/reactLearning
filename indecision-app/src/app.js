console.log('App.js is running.')

//JSX-      JS XML 
var template = (
    <div>
        <h1>This was changed again.</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>);
    
var templateTwo=(
    <div>
        <h1>Nikola Ninov</h1>
        <p>Age: 29</p>
        <p>Location: Panaguyrishte,Bul</p>
    </div>
)

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);