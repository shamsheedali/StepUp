import axios from 'axios';

const API_URL = "http://localhost:3000/user";

//Sign--Up
const signUp = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, userData);
        console.log(response);

      if (response.status === 201) {
        console.log("Signup Successfull");
        localStorage.setItem('token', response.data.token);
        console.log("user sign up successfull");
        
      }
    } catch (error) {
      console.error("Error signing up:", error);
    }
}

export {signUp}