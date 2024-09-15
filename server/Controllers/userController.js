import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../Models/User.js";
import DataModel from "../Models/DataModel.js";

dotenv.configDotenv();

//Controller for user sign up
export const userSignUp = async(req, res, next) => {
    try {
        //Destructure the request to get details
        const {name, email, password, img} = req.body; 
        
        //Check if the user already exists in the database
        const existingUser = await User.findOne({email});

        //If yes, return error
        if(existingUser){
            return res.status(409).json("user already exists");
        }
        
        //Create a hash of the password to store in the database
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        
        //Create a document to save in the database
        const user = new User({
            name, 
            email, 
            password: hash, 
            img, 
        });

        //Save the uset in the DB
        const createdUser = await user.save();
        
        //Create a token
        const token = jwt.sign({id: createdUser._id}, process.env.JWTKey, {
            expiresIn: "9999 years",
        });
        
        return res.status(200).json({token, user});
        
    } catch (error) {
        return next(error);
    }
};

//Controller for user sign in
export const userSignIn = async (req,res,next) => {
    try {

        console.log("Received");

        const {email, password} = req.body; 

        //Check if the email exists
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json("Invalid email id")
        }

        console.log(user);

        const isPasswordCorrect = await bcrypt.compareSync(password, user.password); 
        
        if(!isPasswordCorrect){
            return res.status(404).json("Invalid Password");
        }

        const token = jwt.sign({id: user._id}, process.env.JWTKey, {
            expiresIn: "9999 years",
        }); 

        return res.status(200).json({token, user});

    } catch (error) {
        console.log(error);
    }
}

export const addExpense = async(req, res, next) => 
{
    console.log("Add expense request received");
    return res.status(200);
}