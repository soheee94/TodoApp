import axios from "axios";

export const getTodos = async () => {
  const response = await axios.get("/api/todos");
  return response.data;
};
