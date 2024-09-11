import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    description: {type: String, required: true,}, 
    amount: {type: Number, required: true,}, 
    date: {type: Date, default: Date.now,}, 
    category: {type: String,}, 

});

export default mongoose.model("data", dataSchema);