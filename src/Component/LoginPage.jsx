import React, { useState } from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errors = {};
    if (!form.email.trim()) {
      errors.email = "Enter Your Email Address";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email)
    ) {
      errors.email = "Enter a valid Email Address";
    }

    if (!form.password.trim()) {
      errors.password = "Enter Your Password";
    }

    return errors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }

   
    localStorage.setItem("email", form.email);
    


    setIsSubmitted(true);
    setError({});
    setForm({ email: "", password: "" });
    

    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
      <div className="relative bg-white/30 backdrop-blur-md rounded-xl shadow-lg w-[90%] max-w-md p-8 animate-fadeIn transition-all duration-700">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6 tracking-wide">
          Welcome Back
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            {error.email && (
              <p className="text-red-600 text-sm mt-1">{error.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                name="password"
                placeholder="Enter Your Password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
                value={form.password}
                onChange={handleChange}
              />
            </div>
            {error.password && (
              <p className="text-red-600 text-sm mt-1">{error.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-md hover:from-pink-600 hover:to-purple-600 transition-transform transform hover:scale-105 font-semibold shadow-lg"
          >
            Login
          </button>

          <div>
            <p className="text-center mt-4 text-sm text-black">
              Don’t have an account?
              <Link to="/register" className="text-blue-600 ml-1 underline">
                Sign Up
              </Link>
            </p>
          </div>
        </form>

        {isSubmitted && (
          <p className="text-green-600 text-center mt-4 font-medium">
            Login Successful
          </p>
        )}
      </div>
    </div>
  );
}

export default LoginPage;






