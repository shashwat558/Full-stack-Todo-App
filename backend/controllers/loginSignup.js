const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const  { secret } = require("../middleware/middleware");
const { userModel } = require("../db/user");


const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try{
        if(!(email || password)) {
            return res.status(400).json({message: "Please provide the asked data"})
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).json({message: "User doesn't exist"});
        }
        const islegit = await bcrypt.compare(password, user.password);
        if(!islegit){
            return res.status(403).json({message: "Incorrect email or password"});
        }
        const payload = user._id.toString();
        console.log(payload)

        const token = jwt.sign({id:payload}, secret);
        res.status(200).json({message: "Logged in Succesfully",token:token, userId: user._id});
    }catch(err){
        res.status(500).json({Error: err.message})
    }
    
    
}


const signUpUser = async (req, res) => {
    const { email, password, name } = req.body
    try {
        if(!(email || password)){
            return res.status(400).json({message: "Please provide the asked data"})
        }
        const exists = await userModel.findOne({email});
        if(exists){
            return res.status(409).json({message: "email already exist"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({name, email, password: hashedPassword});
        const user = await newUser.save();
        const payload = user._id.toString();
        const token = jwt.sign(payload, secret);
        res.status(200).json({
            message:  `User Created Succesfully`,
            token: token
        })
    }catch(err){
        res.status(500).json({message: err.message})
    }
}

const getUser = async (req, res) => {
    const id = req.user.id;
    try {
        const user = await userModel.findOne({_id: id});
        res.status(200).json({user:user[0]})
    } catch(err){
        res.status(500).json({error: err.message})
    }
}

module.exports = {
    loginUser,
    signUpUser,
    getUser
}