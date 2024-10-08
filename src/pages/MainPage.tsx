import { useTodos } from "../hooks/useTodos";
import { Todo } from "../types/todoType";

const Home = () => {
  const { data: todos, isLoading, error } = useTodos();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading todos</div>;

  return (
    <div>
      <ul>
        {todos.map((todo: Todo) => (
          <li key={todo.id}>
            userId:{todo.userId} id:{todo.id} {todo.title} {`${todo.completed}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
