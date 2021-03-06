import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { Contacts } from './components/Contacts';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Pricing } from './components/Pricing';
import { StarshipList } from './components/StarshipList';
import { Starships } from './components/Starships';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <h1>Hello react!</h1>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/starships' element={<StarshipList />} />
          <Route path='/starships/:productId/*' element={<Starships />} />
          <Route path='/millennium-falcon' element={<Navigate to="/products/10" replace />} />
          <Route path='/contacts' element={<Contacts />} />
        </Routes>

        <Footer />
      </header>
    </div>
  );

}

export default App;
