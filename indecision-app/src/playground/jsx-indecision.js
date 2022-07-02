// console.log('App.js is running.')

// const appObject = {
//     title: "Indecision App.",
//     subtitle: "This is some info",
//     options: []
// }
// //JSX-JS XML 

// const onFormSubmit = (e) => {
//     e.preventDefault();
//     const option = e.target.elements.option.value;
//     if (option) {
//         appObject.options.push(option);
//         e.target.elements.option.value = '';
//         renderTemplate();
//     }

// }
// const removeAll = () => {
//     appObject.options = [];
//     renderTemplate();
// }
// const onMakeDecision = () => {
//     const randomNum = Math.floor(Math.random() * appObject.options.length);
//     const option = appObject.options[randomNum];
//     alert(option);
// }

const appRoot = document.getElementById('app');

// const renderTemplate = () => {
//     const template = (
//         <div>
//             <h1>{appObject.title}</h1>
//             <p>{appObject.subtitle && appObject.subtitle}</p>
//             <p>{appObject.options.length > 0 ? "Here are your options" : "No options"}</p>
//             <p>{appObject.options.length}</p>
//             <button disabled={appObject.options.length === 0} onClick={onMakeDecision}> What should i do</button>
//             <button onClick={removeAll}>Remove All</button>

//             <ol>
//                 {
//                     appObject.options.map((option) => <li key={option}>{option}</li>)
//                 }
//             </ol>
//             <form onSubmit={onFormSubmit}>
//                 <label htmlFor="">Option:</label>
//                 <input type="text" name="option" />
//                 <button>Add Option</button>
//             </form>
//         </div>);

//     ReactDOM.render(template, appRoot);
// }
// renderTemplate()
let visibility = false;
const toggleVisibility = () => {
    visibility = !visibility
     render();
}
const render = () => {
    const jsx = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button>
            {visibility && <p>Hey. These are some details you can now see</p>}
        </div>
    );
    ReactDOM.render(jsx, document.getElementById('app'));
}


render();