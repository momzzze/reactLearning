let count = 0;
const addOne = () => {
    count++;
    renderedCounter();
}
const minusOne = () => {
    count--;
    renderedCounter();
}
const setUpReset = () => {
    count = 0;
    renderedCounter();
}

const appRoot = document.getElementById('app');


const renderedCounter = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button className="button" onClick={addOne}>+1</button>
            <button className="button" onClick={minusOne} >-1</button>
            <button className="button" onClick={setUpReset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}
renderedCounter();