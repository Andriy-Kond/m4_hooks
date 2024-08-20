import { List, ListItem } from "./TodoList.styled";
import TodoITem from "Todo/components/TodoItem";

function TodoList({ todos, onDeleteTodo, onToggleCompleted }) {
  return (
    <List>
      {todos.map(({ id, text, completed }) => (
        <ListItem key={id}>
          <TodoITem
            completed={completed}
            text={text}
            onToggleCompleted={onToggleCompleted}
            onDeleteTodo={onDeleteTodo}
            id={id}
          />
        </ListItem>
      ))}
    </List>
  );
}

export default TodoList;
