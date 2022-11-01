import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
// import User from '../models/user.js';

import User from '../models/user.js';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();

export const signin =async(req,res) => {
    //getting two things from the front end
    // email and password
    const { email, password} = req.body;

    try {
        const existingUser = await User.findOne({email});

        if (!existingUser) return res.status(404).json({message: 'User not found'});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: 'Invalid Credentials'});

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.SECRET, { expiresIn: '1h'});

        res.status(200).json({result: existingUser, token});

    } catch (error) {
        res.status(500).json({message: "something went wrong in the user.js"});
    }
}

export const signup =async(req,res) => {
    const {email, password, confirmPassword, firstName, lastName} = req.body;

    try {
        //cant create account if theres an existing user
        const existingUser = await User.findOne({email});

        if(existingUser) return res.status(404).json({message: "User already exist"});

        if(password !== confirmPassword) return res.status(404).json({message: "Passwords dont match"});

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({email, password: hashedPassword, name: `${firstName} ${lastName}`})

        const token = jwt.sign({email: result.email, id: result._id}, process.env.SECRET, {expiresIn: "1h"});

        res.status(200).json({result: result, token});
    } catch (error) {
        res.status(500).json({message: "something went wrong in the user.js"});
    }
}