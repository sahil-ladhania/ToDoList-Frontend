// Import axios.
import axios from 'axios';

// Define baseUrl for FrontEnd to make request to your BackEnd(Should be same on Both).
const baseUrl = "https://localhost:80";

// Define Functions for (Getting All ToDo's, Adding ToDo, Updating ToDo, Deleting ToDo).
// 1. Define Function for Getting All ToDo's.
const getAllToDo = () => {
    axios
        .get(`${baseUrl}/`)
        .then((res) => {
            const todos = res.data;
            console.log(todos);
        })
        .catch((error) => {
            console.error(`${error} :- Oops there is an error !!!`);
        })
};
// 2. Define Function for Adding ToDo.
const addToDo = (task) => {
    axios
        .post(`${baseUrl}/save`, task)
        .then((res) => {
            const newTask = res.data;
            console.log(newTask);
        })
        .catch((error) => {
            console.error(`${error} :- Oops there is an error !!!`)
        })
};
// 3. Define Function for Updating ToDo.
const updateToDo = (_id, task) => {
    axios
        .put(`${baseUrl}/update/${_id}`, task)
        .then((res) => {
            console.log("Hello World");
        })
        .catch((error) => {
            console.error(`${error} :- Oops there is an error !!!`)
        })
};
// 4. Define Function for Deleting ToDo.
const deleteToDo = (_id) => {
    axios
        .delete(`${baseUrl}/delete/${_id}`)
        .then((res) => {
            console.log("Hello World");
        })
        .catch((error) => {
            console.error(`${error} :- Oops there is an error !!!`)
        })
};

export { getAllToDo, addToDo, updateToDo, deleteToDo }