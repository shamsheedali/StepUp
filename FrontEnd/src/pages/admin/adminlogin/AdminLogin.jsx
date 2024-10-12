import React from "react";
import { FaGoogle, FaFacebookF } from "react-icons/fa";
import SignupImg from '../../../assets/images/auth/nike.png'

const AdminLogin = () => {
  return (
    <div className="bg-[#1a3120] w-full h-screen flex items-center justify-center">
      <div className="bg-white w-[70%] h-[80%] rounded-md flex">
        <div className="bg-black w-[50%] h-[100%] flex flex-col justify-center items-center">
          <img src={SignupImg} alt="" className="w-[286px] rotate-[321deg] brightness-[0.6] relative right-[40px] bottom-[35px]" />

          <h1 className="text-6xl absolute font-bold text-white">StepUp</h1>

        </div>
        <div className="w-[50%] text-black font-clash-grotesk flex flex-col items-center justify-evenly py-3 gap-3 text-center">
          <div>
            <h1 className="text-3xl font-bold font-clash-grotesk">
              Admin Login
            </h1>
          </div>
          <div className="flex flex-col gap-8 relative top-2">
            {/* Input section */}
            <div class="relative w-80">
              <input
                type="email"
                id="input"
                className="peer w-full text-lg border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-black transition duration-300 ease-in-out"
                required
              />
              <label
                for="input"
                className="absolute left-0 top-0 text-gray-400 transition-all duration-300 ease-in-out pointer-events-none peer-focus:top-[-20px] peer-valid:top-[-20px] peer-focus:text-gray-800 peer-valid:text-gray-800 peer-focus:text-sm peer-valid:text-sm"
              >
                Email
              </label>
              <div class="absolute bottom-0 left-0 h-0.5 w-full bg-gray-800 transform scale-x-0 transition-transform duration-300 ease-in-out peer-focus:scale-x-100 peer-valid:scale-x-100"></div>
            </div>
            <div class="relative w-80">
              <input
                type="password"
                id="input"
                class="peer w-full text-lg border-b-2 border-gray-300 bg-transparent focus:outline-none focus:border-gray-800 transition duration-300 ease-in-out"
                required
              />
              <label
                for="input"
                class="absolute left-0 top-0 text-gray-400 transition-all duration-300 ease-in-out pointer-events-none peer-focus:top-[-20px] peer-valid:top-[-20px] peer-focus:text-gray-800 peer-valid:text-gray-800 peer-focus:text-sm peer-valid:text-sm"
              >
                Password
              </label>
              <div class="absolute bottom-0 left-0 h-0.5 w-full bg-gray-800 transform scale-x-0 transition-transform duration-300 ease-in-out peer-focus:scale-x-100 peer-valid:scale-x-100"></div>
            </div>

            {/* Sign--up btn */}
            <button className="btn w-60 text-white mx-auto bg-black">Log In</button>
          </div>

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

export default AdminLogin;
