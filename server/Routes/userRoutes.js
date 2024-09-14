import express from "express";
import { addExpense } from "../Controllers/userController.js";

const router = express.Router();

router.post('/budget/addExpenseData', addExpense);

export default router;