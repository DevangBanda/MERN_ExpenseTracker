import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:"User", 
        required: true
    },
    description: {type: String, required: true,}, 
    amount: {type: Number, required: true,}, 
    date: {type: Date, default: Date.now, required: true}, 
    category: {type: String, default: "Expense", required: true}, 

});

export default mongoose.model("DataModel", dataSchema);