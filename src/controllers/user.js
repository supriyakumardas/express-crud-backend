const User = require("../models/user");

require("dotenv").config();


const registerUser = async (req, res) => {

  try {
    const email = req.body.email;

    const isUser = await User.findOne({email});
    
    if (isUser) {
      const user_res = {
        message: "Email is already exist.",
        status: 403,
      };
      res.status(200).json(user_res);
    } else {
      const user = new User(req.body);
      const result = await user.save();
      const user_res = {
        userId: result._id,
        message: "User has been registered successfully.",
        status: 201,
      };
      res.status(201).json(user_res);
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const email = req.body.email;
  
    const userData = await User.findOne({ email});
  
    if (userData) {
          if (userData.password.trim() === req.body.password.trim()) {
            res.status(200).json({ userId: userData._id,  message: "Log in successful", status: 200 });
          } else {
            res.status(402).json({ message: "Invalid credentials", status: 402 });
          }
     
    } else {
      res.status(404).json({ message: "User Not Found! Please register", status: 404 });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  } 
};

const userDetails = async (req, res) => {
  try {
    const {_id} = req.params ;
  
    const userData = await User.findById(_id);
  
    if (userData) {
        res.status(200).json({ data: userData,  message: "Success", status: 200 });
    } else {
      res.status(404).json({ message: "User Not Found! Please register", status: 404 });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  } 
};



module.exports = {

  registerUser,
  userLogin,
  userDetails
};