import mongoose, { mongo } from "mongoose";

const categorySchema = mongoose.Schema({
        // user:{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref:"User", 
    //     required: true
    // },
    categoryName:{
        type: String, 
        default: "Expense",
        unique: true, // Ensure that categories are unique
        trim: true
    }
});

export default mongoose.model("Category", categorySchema);