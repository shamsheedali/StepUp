import axios from 'axios';

const API_URL = "http://localhost:3000/user";

//Sign--Up
const signUp = async (userData) => {
    try {
        const response = axios.post(`${API_URL}/signup`, userData);
        console.log(response.data); // Handle success

      if (response.status === 201) {
        console.log("Signup Successfull");
        localStorage.setItem('token', response.data.token);
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
}

export {signUp}