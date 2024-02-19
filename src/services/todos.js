import axios from "axios";
import { addTodos } from "../redux/reducer/slices/createRead.slice";

export const getTodos = () => async (dispatch) => {
  console.log("Print todos");
  try {
    const response = await axios.get("http://localhost:8000/todos/get_all");
    console.log(response.data);
    dispatch(addTodos(response.data.data));
  } catch (error) {
    console.log(error);
  }
};

export const setTodo = (todo) => async (dispatch) => {
  console.log(todo);
  try {
    const response = await axios.post(
      "http://localhost:8000/todos/send-todo",
      todo
    );
    if (response.status === 201) {
      dispatch(getTodos());
    }
  } catch (error) {
    console.log("error", error)
  }
};
