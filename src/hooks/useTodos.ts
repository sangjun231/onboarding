import { useQuery } from "@tanstack/react-query";
import { fetchTodos } from "../api/todosApi";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });
};
