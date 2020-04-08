import axios from "axios";

export const getTodos = async () => {
  const response = await axios.get("/api/todos");
  return response.data;
};

export const postTodo = async data => {
  const { text, ref } = data;
  const response = await axios.post("/api/todos", {
    text,
    ref
  });
  return response.data;
};
