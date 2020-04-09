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

export const deleteTodo = async id => {
  const response = await axios.delete(`/api/todos/${id}`);
  return response.data;
};

export const toggleTodo = async id => {
  const response = await axios.put(`/api/todos/${id}/done`);
  return response.data;
};

export const putTodo = async data => {
  const { id, text, ref } = data;
  const response = await axios.put(`/api/todos/${id}`, {
    text,
    ref
  });
  return response.data;
};
