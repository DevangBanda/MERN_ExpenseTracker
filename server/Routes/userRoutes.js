import express from "express";
import { addExpense, userSignUp, userSignIn, addCategory } from "../Controllers/userController.js";

const router = express.Router();

router.post('/signUp', userSignUp);
router.get('/signIn', userSignIn);

router.post('/budget/addExpenseData', addExpense);
router.post('/budget/addCategory', addCategory);

export default router;