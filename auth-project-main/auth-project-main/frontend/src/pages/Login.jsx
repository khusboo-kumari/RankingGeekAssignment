
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const PORT = 4000;
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required!", { theme: "dark" });
      return;
    }
    try {
      // const response = await axios.post(`http://localhost:${PORT}/login`, { email, password });
      const response = await axios.post(`https://auth-project-backend-roan.vercel.app/login`, { email, password });
      toast.success("Login successful! Redirecting...", { theme: "colored" });
      localStorage.setItem("token", response.data.token);
      setTimeout(() => navigate("/"), 3000); // Wait 3 seconds before redirecting
    } catch (error) {
      toast.error("Invalid credentials! Please try again.", { theme: "dark" });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg"
          >
            Login
          </button>
        </form>
        <p className="text-gray-400 text-center mt-4">
          Don't have an account?{" "}
          <span
            className="text-blue-400 cursor-pointer hover:underline"
            onClick={() => navigate("/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
