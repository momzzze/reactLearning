import "./styles.css";
import logo from "../../assets/logo.png";
import { useAuth } from "../../contexts/AuthContext";
import { useState } from "react";
export const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
    } catch (err) {
      setError(err.message); // Display error message
    }
  };

  return (
    <div className="wrapper">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" type="submit">
            Login
          </button>
          {error && <p className="error">{error}</p>}
        </form>
      </div>
    </div>
  );
};
