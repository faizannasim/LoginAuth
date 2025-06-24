import React, { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaCalendarAlt } from "react-icons/fa";
import { Link,useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    DateofBirth: "",
  });
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const error = {};
    if (!form.name.trim()) error.name = "Enter Your Name";
    if (!form.Email.trim()) {
      error.Email = "Enter Your Email";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.Email)
    ) {
      error.Email = "Enter a Valid Email Address";
    }
    if (!form.Password.trim()) error.Password = "Please Enter Your Password";
    if (!form.ConfirmPassword.trim()) {
      error.ConfirmPassword = "Enter Your Confrim PassWord";
    } else if (form.Password !== form.ConfirmPassword)
      error.ConfirmPassword = "Password do not match";
    if (!form.DateofBirth.trim())
      error.DateofBirth = "Please Enter Your Date of Birth";
    return error;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
    } else {
      //console.log("name", form.name);
      //console.log("Email", form.Email);
      //console.log("Password", form.Password);
      //console.log("ConfirmPassword", form.ConfirmPassword);
      //console.log("Date Of Birth", form.DateofBirth);

      setIsSubmitted(true);
      setError({});
      setForm({
        name: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
        DateofBirth: "",
      });
      navigate("/dashboard")
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen font-extralight bg-gradient-to-br from-blue-300 via-purple-200 to-pink-400">
      <div className="relative bg-white/30 backdrop-blur-md rounded-xl shadow-lg w-[90%] max-w-md p-8 animate-fadeIn transition-all duration-700">
        <h1 className="text-4xl text-center mb-6">Hello, How You Doing?</h1>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaUser />
              </span>
              <input
                type="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              />
            </div>
            <div>
              {error.name && (
                <p className="text-red-700 text-sm mt-1">{error.name}</p>
              )}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaEnvelope />
              </span>
              <input
                type="Email"
                value={form.Email}
                name="Email"
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              />
            </div>
            <div>
              {error.Email && (
                <p className="text-red-700 text-sm mt-1">{error.Email}</p>
              )}
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                name="Password"
                value={form.Password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              />
            </div>
            <div>
              {error.Password && (
                <p className="text-red-700 text-sm mt-1">{error.Password}</p>
              )}
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Confirm Password
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaLock />
              </span>
              <input
                type="ConfirmPassword"
                value={form.ConfirmPassword}
                onChange={handleChange}
                name="ConfirmPassword"
                placeholder="Enter Confirm Password"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              />
            </div>
            <div>
              {error.ConfirmPassword && (
                <p className="text-red-700 text-sm mt-1">
                  {error.ConfirmPassword}
                </p>
              )}
            </div>
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Date of Birth
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaCalendarAlt />
              </span>
              <input
                type="date"
                name="DateofBirth"
                onChange={handleChange}
                value={form.DateofBirth}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:outline-none transition"
              />
              <div>
                {error.DateofBirth && (
                  <p className="text-red-700 text-sm mt-1">
                    {" "}
                    {error.DateofBirth}
                  </p>
                )}
              </div>
            </div>
            <div className=" flex justify-center hover:bg-red-200 items-center bg-gradient-to-br from-blue via-purple-900 to-pink-100 h-[50px] mt-9 w-[150px] border rounded text-green-50 shadow-2xl ml-[120px]">
              <button>Submit</button>
            </div>
          </div>
          <div className="flex justify-center items-center ">
            <p className="font-light text-black cursor-pointer">
              Already Registered?
              <Link to="/Login" className="text-blue-600 ml-1">
                Click Here
              </Link>
            </p>
          </div>
        </form>
        {isSubmitted && (
          <p className="text-red-700 flex justify-center items-center">
            🎉 Registration successful!
          </p>
        )}
      </div>
    </div>
  );
}

export default Register;
