import React, { useState } from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import SignupImg from '../../../assets/images/auth/nike.png';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser } from '../../../features/users/UserSlice';  // Import the signup action

const Signup = () => {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);

  // Validation logic
  const validate = () => {
    let tempErrors = {};
    if (!formData.username) tempErrors.username = "Username is required";
    if (!formData.email) tempErrors.email = "Email is required";
    if (!formData.password) tempErrors.password = "Password is required";
    else if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      dispatch(signupUser(formData));  // Dispatch the Redux signup action
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
            <h1 className="text-3xl font-bold font-clash-grotesk">Get Started</h1>
            <h3 className="text-sm text-[#201f1fde] font-semibold">
              Already have account? <a href="">Log In</a>
            </h3>
          </div>

          {/* Form section */}
          <form className="flex flex-col gap-8 relative top-2" onSubmit={handleSubmit}>
            <div className="relative w-80">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="peer w-full text-lg border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition duration-300 ease-in-out"
                required
              />
              <label
                className="absolute left-0 top-0 text-gray-400 transition-all duration-300 ease-in-out pointer-events-none peer-focus:top-[-20px] peer-valid:top-[-20px] peer-focus:text-gray-800 peer-valid:text-gray-800 peer-focus:text-sm peer-valid:text-sm"
              >
                Username
              </label>
              <div className="text-red-600">{errors.username}</div>
            </div>

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

            {/* Sign--up button */}
            <button
              type="submit"
              className="btn w-60 text-white mx-auto bg-black"
              disabled={loading}
            >
              {loading ? "Signing up..." : "Sign Up"}
            </button>
            {error && <div className="text-red-600">{error}</div>}
          </form>

          {/* Divider and social icons */}
          <div className="w-80 h-[2px] bg-gray-500"></div>
          <div className="flex space-x-4 relative bottom-2">
            <div className="flex gap-2 items-center justify-center w-12 h-12 border-2 border-black rounded cursor-pointer">
              <FaGoogle className="text-black text-xl" />
            </div>
            <div className="flex gap-2 items-center justify-center w-12 h-12 border-2 border-black rounded cursor-pointer">
              <FaFacebookF className="text-black text-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
