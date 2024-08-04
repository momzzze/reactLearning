import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { UserProvider } from './context/UserContext.jsx';
import { SocketContextProvider } from './context/websocket-provider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <UserProvider>
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </UserProvider>
    </Router>
  </React.StrictMode>,
)
