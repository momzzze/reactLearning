// Components
// import { LoginPage } from './Pages/Login';
import { EntitiesPage } from "./Pages/Entities";
//Styles
import "./App.css";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { LoginPage } from "./Pages/Login";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import NavBar from "./Components/Navbar/NavBar";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppLayout /> {/* ✅ Wrap everything with AppLayout */}
      </AuthProvider>
    </Router>
  );
}

const AppLayout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="app-wrapper">
      <div>{isAuthenticated && <NavBar />} </div>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/entities"
            element={<ProtectedRoute component={EntitiesPage} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
};
const ProtectedRoute = ({ component: Component }: { component: React.FC }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <Component /> : <Navigate to="/" />;
};

export default App;
