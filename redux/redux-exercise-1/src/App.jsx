import { Route, Routes } from "react-router-dom";
import { Login, Register, Dashboard, Home, ForgotPassword } from "./pages";
import Layout from "./components/Layout/Layout";
import Routers from "./routers/Routers";

function App() {

  return (
    <Routers />
  )
}

export default App
