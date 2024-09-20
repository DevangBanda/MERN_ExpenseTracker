import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../Models/User.js";
import Expense from "../Models/Expense.js";
import Category from "../Models/Category.js";
import mongoose from "mongoose";

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


export const addCategory = async(req, res, next) =>{
    const {categoryName} = req.body;
    
    console.log(req.body);

    try {
        const newCategory = new Category({categoryName});
        await newCategory.save();
        return res.status(200).json(newCategory);  
    } catch (error) {
        
    }
}

export const categoryList = async(req,res,next) => 
{
    console.log("category req received");
    
    const categories = await Category.find(); 
    return res.status(200).json(categories);
}

export const deleteCategory = async(req, res, next) => {
    const {id} = req.params; 
    const abc = await Category.deleteOne({_id: new mongoose.Types.ObjectId(id)});
    console.log(abc);
    return res.status(200).json("deleted");
};

export const addExpense = async(req, res, next) => {
    console.log("Add expense");
    const data = req.body;
    try {
        const expense = new Expense(data);
        console.log(data);
        await expense.save()
            .then((res) =>{console.log(res)})
            .catch((error) => {console.log(error)});
        return res.status(200).json(expense); 
    } catch (error) {
        
    }
    return res.status(200).json("received");
};

export const sendExpense = async(req,res,next) => {

    console.log("get expenses request received");
    const expenses = await Expense.find({});
    console.log(expenses); 
    return res.status(200).json(expenses);
};
    

