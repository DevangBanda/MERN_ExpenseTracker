import express from "express";
import { userSignUp, userSignIn, addCategory, categoryList, deleteCategory, addExpense, sendExpense, deleteExpense} from "../Controllers/userController.js";

const router = express.Router();

router.post('/signUp', userSignUp);
router.get('/signIn', userSignIn);

//Category Section
router.post('/budget/addCategory', addCategory);
router.get('/budget/getCategoryList', categoryList);
router.delete(`/budget/deleteCategoryList/:id`, deleteCategory);

//Expenses Section
router.post('/dashboard/addExpense', addExpense);
router.get(`/dashboard/getExpense`, sendExpense);
router.delete(`/dashboard/deleteExpense/:id`, deleteExpense);



export default router;