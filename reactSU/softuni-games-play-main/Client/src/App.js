import './App.css';
import { useEffect, useState } from 'react';
import * as gameService from './services/gameService';
import { Login } from './components/Auth/Login/Login';
import { Register } from './components/Auth/Register/Register';
import { Catalogue } from './components/Catalogue/Catalogue';
import { Create } from './components/Create/Create';
import { Details } from './components/Details/Details';
import uniqid from 'uniqid';
import { AuthContext } from './contexts/authContext';
import { Edit } from './components/Edit/Edit';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import Logout from './components/Auth/Logout/Logout';

function App() {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();
  const [auth, setAuth] = useState({});


  const userLogin = (authData) => {
    setAuth(authData);
  }

  const addComment = (gameId, comment) => {
    setGames(state => {
      const game = state.find(x => x._id == gameId);

      const comments = game.comments || [];
      comments.push(comment);
      return [
        ...state.filter(x => x._id !== gameId),
        { ...game, comments }
      ]
    })
  }

  const addGameHandler = (gameData) => {
    setGames(state => [
      ...state,
      {
        ...gameData,
        _id: uniqid()
      }
    ]);
    navigate('/catalogue');
  }
  const userLogout = () => {
    setAuth({})
  }

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        setGames(result);
      })
  }, []);

  return (
    <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
      <div id="box">
        <Header />
        {/* Main Content */}
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home games={games} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/catalogue' element={<Catalogue games={games} />} />
            <Route path='/create' element={<Create addGameHandler={addGameHandler} />} />
            <Route path='/catalogue/:gameId' element={<Details games={games} addComment={addComment} />} />
          </Routes>
        </main>

      </div>
    </AuthContext.Provider>
  );
}

export default App;

