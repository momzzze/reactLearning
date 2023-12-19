import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import store from './redux/store.js'
import { Provider } from 'react-redux'
import { fetchUsersFromFirebase } from './redux/slices/userSlice.js'
import { getProductsFromFirebase } from './redux/slices/productSlice.js'

store.dispatch(fetchUsersFromFirebase())
store.dispatch(getProductsFromFirebase())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </Provider>
  </Router>
)
