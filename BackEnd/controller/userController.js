import users from "../modal/userModal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//USER-- SIGNUP
const signUp = async(req, res) => {
  try {
    const {username, email, password} = req.body;

    const user = await users.findOne({email});
    if(user){
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new users({
        username,
        email,
        password : hashedPassword
    })

    // Save user to database
    await newUser.save();

    //New User Token
    const token = jwt.sign(
        {
          id: newUser._id,
          email: newUser.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(201).json({ message: "Signup Successful", token })
      console.log("New User Signed In");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error SigningUp" });
  }
};

export { signUp };