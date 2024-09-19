import axios from "axios";

const API = axios.create({
    baseURL : "http://localhost:5100/",
});

export const addExpenseCSV = async(data) =>  await API.post(`/budget/addExpenseData`, data, {
    onUploadProgress: (ProgressEvent) => {console.log(ProgressEvent.progress * 100)},
    headers: {
        "Custom-Header":"value",
    }
});

export const userSignUp = async(data) => await API.post(data)(`/userSignUp`. data);
export const userSignIn = async(data) => await API.post(data)(`/userSignIn`. data);

export const addCategory = async(data) => await API.post(`/budget/addCategory`, data, {
    onUploadProgress: (ProgressEvent) => {console.log(ProgressEvent.progress * 100)},
    headers: {
        "Custom-Header":"value",
    }
});

export const getCategoryList = async() => API.get(`/budget/getCategoryList`);
export const deleteCategoryList = async(id) => API.delete(`/budget/deleteCategoryList/${id}`);
