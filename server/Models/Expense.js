import mongoose, { mongo } from "mongoose";

const dataSchema = new mongoose.Schema({
    // user:{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref:"User", 
    //     required: true
    // },
    dateStr: {type: String, default: Date.now, required: true}, 
    description: {type: String, required: true}, 
    amount: {type: String, required: true}, 
  //  category: {type: mongoose.Schema.Types.ObjectId, ref:"Category", default: "Expenses", required: true}, 

});

export default mongoose.model("Expense", dataSchema);