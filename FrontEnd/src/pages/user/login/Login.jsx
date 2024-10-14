import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import SignupImg from '../../../assets/images/auth/nike.png'
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../../api/users'

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState(""); // For displaying login errors
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validation logic
  const validate = () => {
    let tempErrors = {};
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Reset any previous error messages
    if (validate()) {
      setLoading(true); 
      try {
        const response = await login(formData);
        if (response && response.status === 200) {
          console.log("Login successful");
          navigate("/homepage"); // Only navigate if login is successful
        }
      } catch (error) {
        setErrorMessage("Invalid email or password"); // Setting the error message if login fails
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-[#1a3120] w-full h-screen flex items-center justify-center">
      <div className="bg-white w-[70%] h-[80%] rounded-md flex">
        <div className="bg-black w-[50%] h-[100%] flex flex-col justify-center items-center">
          <img src={SignupImg} alt="" className="w-[286px] rotate-[321deg] brightness-[0.6] relative right-[40px] bottom-[35px]" />

          <h1 className="text-6xl absolute font-bold text-white">StepUp</h1>
        </div>
        <div className="w-[50%] text-black font-clash-grotesk flex flex-col items-center justify-evenly py-3 gap-3 text-center">
          <div>
          <h1 className="text-3xl font-bold font-clash-grotesk">Welcome Back</h1>
            <h3 className="text-sm text-[#201f1fde] font-semibold">
              New to StepUp? <Link to={'/signup'}>Sign Up</Link>
            </h3>
          </div>
          <form className="flex flex-col gap-8 relative top-2" onSubmit={handleSubmit}>
            {/* Input section */}
            <div className="relative w-80">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="peer w-full text-lg border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition duration-300 ease-in-out"
                required
              />
              <label
                className="absolute left-0 top-0 text-gray-400 transition-all duration-300 ease-in-out pointer-events-none peer-focus:top-[-20px] peer-valid:top-[-20px] peer-focus:text-gray-800 peer-valid:text-gray-800 peer-focus:text-sm peer-valid:text-sm"
              >
                Email
              </label>
              <div className="text-red-600">{errors.email}</div>
            </div>

            <div className="relative w-80">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="peer w-full text-lg border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-gray-800 transition duration-300 ease-in-out"
                required
              />
              <label
                className="absolute left-0 top-0 text-gray-400 transition-all duration-300 ease-in-out pointer-events-none peer-focus:top-[-20px] peer-valid:top-[-20px] peer-focus:text-gray-800 peer-valid:text-gray-800 peer-focus:text-sm peer-valid:text-sm"
              >
                Password
              </label>
              <div className="text-red-600">{errors.password}</div>
            </div>
            {errorMessage && <div className="text-red-600">{errorMessage}</div>}

            <button
              type="submit"
              className={`btn w-60 text-white mx-auto bg-black ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={loading}
            >
              {loading ? "Logging In..." : "Log In"}
            </button>

          </form>

          {/* LINE */}
          <div className="w-80 h-[2px] bg-gray-500"></div>
          {/* Icons */}
          <div className="flex space-x-4 relative bottom-2">
            {/* Google Icon */}
            <div className="flex gap-2 items-center justify-center w-12 h-12 border-2 border-black rounded cursor-pointer">
              <FaGoogle className="text-black text-xl" />
            </div>

            {/* Facebook Icon */}
            <div className="flex gap-2 items-center justify-center w-12 h-12 border-2 border-black rounded cursor-pointer">
              <FaFacebookF className="text-black text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
