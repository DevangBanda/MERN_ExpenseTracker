import express from "express"; 
// import { configDotenv } from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import userRoutes from './Routes/userRoutes.js';

const app = express();
dotenv.config();

//Middleware
app.use(express.json());
app.use(cors()); 
app.use(express.json({limit: "50mb"})); //Register the middleware with limit of 50mb
app.use(express.urlencoded({extended: true})); //Register the middleware used to parse incoming requests with URL encoded payloads


app.get("/",(req, res) =>
{
    res.status(200).json({message: "Hello"});
})


app.use("/", userRoutes);

mongoose
        .connect(process.env.mongoDB_URL)
        .then((res) => {     
            app.listen(process.env.PORT, () => 
                {
                    console.log("App is listening at Port 5100");
                })
            console.log("Connected to Database");      
        })
        .catch((error) =>{
        
            console.log(error);
        });

