import mongoose, { mongo } from "mongoose";
import { getDefaultHighWaterMark } from "stream";

const dataSchema = new mongoose.Schema({
    // user:{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref:"User", 
    //     required: true
    // },
    dateStr: {type: String, default: Date.now, required: true}, 
    description: {type: String, required: true}, 
    amount: {type: String, required: true}, 
    categoryId:{type: String, required: true},
    categoryName: {type: String, default:"Expense"},
  //  category: {type: mongoose.Schema.Types.ObjectId, ref:"Category", default: "Expenses", required: true}, 

});

export default mongoose.model("Expense", dataSchema);