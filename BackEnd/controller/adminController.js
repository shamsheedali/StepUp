import admins from "../modal/adminModal.js";
import users from '../modal/userModal.js'
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//ADMIN--LOGIN
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const admin = await admins.findOne({ email });

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, admin.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid Password" });
    }

    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({ message: "Admin Login Successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error While Admin Login" });
  }
};


//GET--USERS
const fetchUsers = async (req, res) => {
  try {
    const allUsers = await users.find();
    res.json(allUsers)
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error })
  }
}

export {login, fetchUsers};