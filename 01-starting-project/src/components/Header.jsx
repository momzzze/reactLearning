import reactImg from '../assets/react-core-concepts.png';
import './Header.css';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomint(max) {
  return Math.floor(Math.random() * max.length);
}

export function Header() {
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[genRandomint(reactDescriptions)]} React concepts you
        will need for almost any app you are going to build!
      </p>
    </header>
  );
}
