import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authService } from "../../services/authService";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { login } = useAuth();

  // Dummy user credentials
  const DUMMY_CREDENTIALS = {
    username: "testuser",
    password: "password123",
    userId: "12345",
    email: "testuser@example.com",
    name: "Test User",
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if credentials match dummy user
      if (
        formData.username === DUMMY_CREDENTIALS.username &&
        formData.password === DUMMY_CREDENTIALS.password
      ) {
        // Simulate successful login with dummy user data
        const userData = {
          id: DUMMY_CREDENTIALS.userId,
          username: DUMMY_CREDENTIALS.username,
          email: DUMMY_CREDENTIALS.email,
          name: DUMMY_CREDENTIALS.name,
          token: "dummy_token_" + Date.now(),
        };

        login(userData);
        toast.success("Login Successful!");
        navigate("/dashboard");
      } else {
        // Attempt regular login if not dummy credentials
        const userData = await authService.login(formData);
        login(userData);
        toast.success("Login Successful!");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error.message || "Login Failed");
    }
  };

  // Quick login button for dummy user
  const handleQuickLogin = () => {
    setFormData({
      username: DUMMY_CREDENTIALS.username,
      password: DUMMY_CREDENTIALS.password,
    });
  };

  return (
    <div className=" flex justify-center bg-gradient-to-r">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-xl">
        <h2 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="appearance-none rounded-lg w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="appearance-none rounded-lg w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent transition duration-200"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            >
              Login
            </button>
          </div>
        </form>

        {/* Quick Login Button */}
        <div className="mt-4 text-center">
          <button
            onClick={handleQuickLogin}
            className="w-full py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
          >
            Quick Login with Test User
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
