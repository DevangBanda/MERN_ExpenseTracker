import axios from "axios";

const API = axios.create({
    baseURL : "http://localhost:5100/",
});

export const addExpenseCSV = async(data) =>  await API.post(`/budget/addExpenseData`, data);