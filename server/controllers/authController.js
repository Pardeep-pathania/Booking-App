const Users = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const genToken = require("../config/token");

const getAllUsers = async (req, res) => {
  try {
    const users = await Users.find();

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const registerUser = async (req, res) => {
  const data = req.body;

  try {
    const existingUser = await Users.findOne({ email: data.email });

    if (existingUser) {
      return res.status(400).json("User already exists");
    }
    const hashedPassword = bcryptjs.hashSync(data.password, 10);

    const user = await Users.create({ ...data, password: hashedPassword });

    res.status(201).json({ message: "User Registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

let loginUser = async (req, res) => {
  let data = req.body;
  try {
    let existingUser = await Users.findOne({ email: data.email }).populate("listing","title image1 image2 image3 description rent category city landmark");

    if (!existingUser) {
      return res.status(400).json({ message: "User Not Found" });
    }

    let result = bcryptjs.compareSync(data.password, existingUser.password);

    if (!result) {
      return res.status(400).json({ message: "Invalid Credential" });
    }
   let token = genToken(existingUser._id)

res.cookie("token", token, {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000
})
return res.status(200).json({ existingUser, token });


  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const logout = async(req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"Logout successfully"})
    } catch (error) {
        return res.status(500).json({message:`logout error ${error.message}`})
    }
}

module.exports = { getAllUsers, registerUser, loginUser, logout };
