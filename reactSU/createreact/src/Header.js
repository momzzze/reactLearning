import logo from './logo.svg';

function Header(props) {
    return (<header className="App-header">  
        <h1>{props.text} from {props.name}</h1>      
        <img src={logo} className="App-logo" alt="logo" />
    </header>)
}

export default Header;