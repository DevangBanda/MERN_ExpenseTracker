import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:"User", 
        required: true
    },
    description: {type: String, required: true,}, 
    amount: {type: Number, required: true,}, 
    date: {type: Date, default: Date.now,}, 
    category: {type: String,}, 

});

export default mongoose.model("DataModel", dataSchema);