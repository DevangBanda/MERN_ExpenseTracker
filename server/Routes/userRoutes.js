import express from "express";
import { addExpense, userSignUp, userSignIn } from "../Controllers/userController.js";

const router = express.Router();

router.post('/signUp', userSignUp);
router.get('/signIn', userSignIn);

router.post('/budget/addExpenseData', addExpense);

export default router;