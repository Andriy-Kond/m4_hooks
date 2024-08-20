import React, { Component } from "react";
import { List, ListItem } from "./TodoList.styled";
import TodoITem from "Todo/components/TodoItem";

class TodoList extends Component {
  state = {};

  render() {
    const { todos, onDeleteTodo, onToggleCompleted } = this.props;

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

            {/* <input
              type="checkbox"
              checked={completed}
              onChange={() => {
                onToggleCompleted(id);
              }}
            />

            <ItemText isCompleted={completed}>Task: {text}</ItemText> 

            <button
              onClick={() => {
                onDeleteTodo(id);
              }}>
              Delete task
            </button> */}
          </ListItem>
        ))}
      </List>
    );
  }
}

export default TodoList;
