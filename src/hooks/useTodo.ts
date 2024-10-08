import { useQuery } from "@tanstack/react-query";
import { fetchTodo } from "../api/todosApi";

export const useTodo = (id: number) => {
  return useQuery({
    queryKey: ["todo"],
    queryFn: () => fetchTodo(id),
  });
};
