const express = require('express');
const zod = require('zod');
const { User } = require('../db');
const jwt = require('jsonwebtoken');
const secret = require('../config');
const mongoose = require('mongoose');
const router = express.Router()

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string().max(8),
    firstName: zod.string(),
    lastName: zod.string().optional()
})

router.post('/signup', async (req, res) => {
    const body = req.body;
    const { success } = signupSchema.safeParse(body);
    if(!success){
        return res.status(411).json({
            message:"Email already taken or invalid inputs"
        })        
    }
    const existingUser = await User.findOne({
        username: body.username
    })
    if(existingUser){
        return res.status(411).json({
            message: 'email already taken or invalid input'
        })
    }
    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    const userId = user._id;
    const token = jwt.sign({
        userId
    }, secret);
    res.json({
        message: 'user created succesfully',
        token: token
    })
})

const signinSchema = zod.object({
    username: zod.string(),
    password: zod.string()
})

router.post('/signin', async (req, res) => {
    const { success, data } = signinSchema.safeParse(req.body);
    if(!success){
        return res.status(400).json({
            message: 'Incorrect signin format'
        })
    }
    const { username, password } = data;

    const user = await User.findOne({
        username
    })
    if(!user || user.password !== password){
        return res.status(401).json({
            message: 'Invalid username or password'
        })
    }
    const token = jwt.sign({
        userId: user._id
    }, secret)
    res.json({
        msg: 'user logged in succesfully',
        token: token
    })
})

module.export = router;
