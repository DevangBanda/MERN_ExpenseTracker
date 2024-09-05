import express from "express"; 
import { configDotenv } from "dotenv";
import cors from "cors";

const app = express();

//Middleware
app.use(express.json());
app.use(cors()); 
app.use(express.json({limit: "50mb"})); //Register the middleware with limit of 50mb
app.use(express.urlencoded({extended: true})); //Register the middleware used to parse incoming requests with URL encoded payloads


//Start Listening 
app.listen(process.env.PORT, () => 
{
    console.log("App is listening at Port 5100");
})

