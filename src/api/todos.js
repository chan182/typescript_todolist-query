import axios from "axios";

const REACT_APP_SERVER_URL = "http://localhost:4000";

const getTodos = async () => {
    const response = await axios.get(`
    ${process.env.REACT_APP_SERVER_URL}/todos`);
    console.log(response.data);
    return response.data;
};

// 추가

const addTodo = async (newTodo) => {
    await axios.post(
        `
    ${process.env.REACT_APP_SERVER_URL}/todos`,
        newTodo
    );
};

// 삭제
const removeTodo = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
};

// 수정

const updateTodo = async (id) => {
    const response = await axios.get(`
    ${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
    const newTodo = { ...response.data, isDone: !response.data.isDone };
    await axios.patch(
        `${process.env.REACT_APP_SERVER_URL}/todos/${id}`,
        newTodo
    );
};

export { getTodos, addTodo, removeTodo, updateTodo };
