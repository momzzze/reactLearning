import './App.css';
import { useEffect, useState } from 'react';
import * as gameService from './services/gameService';
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';
import { Catalogue } from './components/Catalogue/Catalogue';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import { Edit } from './components/Edit/Edit';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        setGames(result);
      })
  }, []);
  return (
    <div id="box">
      <Header />
      {/* Main Content */}
      <main id="main-content">
        <Routes>
          <Route path='/' element={<Home games={games} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/catalogue' element={<Catalogue games={games} />} />
          <Route path='/create' element={<Create />} />
        </Routes>
        {/*Home Page*/}
      </main>
      {/* Login Page ( Only for Guest users ) */}
      {/* <Login /> */}
      {/* Register Page ( Only for Guest users ) */}
      {/* <Register /> */}
      {/* Create Page ( Only for logged-in users ) */}
      {/* <Create /> */}
      {/* Edit Page ( Only for the creator )*/}
      {/* <Edit /> */}
      {/*Details Page*/}
      {/* <Details /> */}
      {/* Catalogue */}
      {/* <Catalogue /> */}
    </div>
  );
}

export default App;
