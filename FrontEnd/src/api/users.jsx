import axios from 'axios';

const API_URL = "http://localhost:3000/user";

//Sign--Up
const signUp = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        console.log(response);

      if (response.status === 201) {
        console.log("Signup Successfull");
        localStorage.setItem('userToken', response.data.token);
        console.log("user sign up successfull");
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
}

//Login
const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.status === 200) {
      localStorage.setItem('userToken', response.data.token);
      return response; 
    } else {
      throw new Error('Login failed');
    }
  } catch (error) {
    throw error;
  }
};

export {signUp, login}