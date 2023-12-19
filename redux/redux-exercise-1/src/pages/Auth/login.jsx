import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredentials.user
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="w-full max-w-sm" onSubmit={loginHandler}>
      <h2 className="text-2xl mb-4">Login</h2>      
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">Email</label>
        <input type="email" id="email" onChange={(e) => setEmail(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block mb-1">Password</label>
        <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} className="w-full border border-gray-300 rounded px-3 py-2" />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Login</button>
      <p className="mt-4 text-sm">
        Don't have an account? <a href="/register" className="text-blue-500">Register here</a>.
      </p>
      <p className="mt-2 text-sm">
        <a href="/forgot-password" className="text-blue-500">Forgot your password?</a>
      </p>
    </form>
  )
}

export default Login