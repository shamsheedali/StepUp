import axios from "axios";

const API_URL = "http://localhost:3000/admin";

//ADMIN--LOGIN
const adminlogin = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/admin_login`, userData);
    if (response.status === 200) {
      console.log("Admin Logined");
      localStorage.setItem("token", response.data.token);
      console.log("Admin login succesfull");
    }
  } catch (error) {
    console.error("Error While Admin login:", error);
  }
};

//FETCH--ALL-USERS
const fetchUsers = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/get_users`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

export { adminlogin, fetchUsers };
