import axios from 'axios'

const baseURL = "https://todo-backend-93d6.onrender.com"
const getAllTodo = (setTodoData) => {
    axios
        .get(baseURL)
        .then(({data}) => {
            console.log(data);
            setTodoData(data);
        })
        .catch((error)=>{
            alert("Error occurred while fetching data, Please Check console");
            console.log('Error', error);
        });
}

const addTodo = (text, setText, setTodoData) => {
    axios
        .post(`${baseURL}/save`, {text})
        .then((data) => {
            console.log(data);
            setText("");
            getAllTodo(setTodoData);
        })
        .catch((error) => {
            alert("Failed to Add Todo!");
            console.log('Error', error);
        });
}

const updateTodo = (Todo_Id, Text, setText, setTodoData, setisUpdating) => {
    axios
        .post(`${baseURL}/update`, {_id: Todo_Id, text: Text})
        .then((data) => {
            setText("");
            setisUpdating(false);
            getAllTodo(setTodoData);
        })
        .catch((error) => {
            alert("Failed to Update Todo!");
            console.log('Error', error);
        });
}

const deleteTodo = (Todo_id, setTodoData) => {
    axios
        .post(`${baseURL}/delete`, {_id: Todo_id})
        .then(()=>{
            getAllTodo(setTodoData);
        })
        .catch((err) => {
            console.log('Delete Error', err);
        });
}

export {getAllTodo, addTodo, updateTodo, deleteTodo}