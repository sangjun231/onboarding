import axios from "axios";

const JSON_PLACEHOLDER_URL = import.meta.env.VITE_JSON_PLACEHOLDER_URL;

export const fetchTodos = async () => {
  const response = await axios.get(`${JSON_PLACEHOLDER_URL}/todos`);
  return response.data;
};

export const fetchTodo = async (id: number) => {
  const response = await axios.get(`${JSON_PLACEHOLDER_URL}/todos/${id}`);
  return response.data;
};
