import mongoose, { mongo } from "mongoose";

const categorySchema = mongoose.Schema({
    categoryName:{
        type: String, 
        default: "Expense",
        unique: true, // Ensure that categories are unique
        trim: true
    }, 
    createdAt: {
        default: Date.now
      }
});

export default mongoose.model("Category", categorySchema);