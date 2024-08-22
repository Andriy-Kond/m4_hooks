import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

// import initialTodos from "./dataBase/todos.json";

import { ReactComponent as IconSVG } from "./icons/add_icon.svg";
import Modal from "Modal";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
import IconButton from "./components/IconButton";

import RegisterForm from "./components/RegisterForm";

function Todo() {
  // У початковий стан записую розпарсений localStorage:
  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos")) ?? [],
  );
  // Інакше довелось би робити додатковий useEffect:
  // useEffect(() => {
  //   const todos = window.localStorage.getItem("todos");
  //   const parsedTodos = JSON.parse(todos);
  //   parsedTodos && setTodos(parsedTodos);
  // }, []);

  const [filter, setFilter] = useState("");
  const [isOpenModal, setIsOpenModal] = useState(false);

  const filterInputRef = useRef(null); // ref для інпуту, щоб при закритті модального вікна курсор становився у поле для фільтруванні

  // фокус інпуту після закриття модального вікна:
  useEffect(() => {
    if (!isOpenModal && filterInputRef.current) {
      filterInputRef.current.focus();
    }
  }, [isOpenModal]);

  useEffect(() => {
    if (todos.length > 0) {
      window.localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const deleteTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
  };

  const toggleCompleted = todoId => {
    setTodos(
      todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const addTask = text => {
    const newTodo = { id: nanoid(), text, completed: false };
    setTodos([newTodo, ...todos]);
    toggleModal();
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleTodos = () => {
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  const getCompletedTodoCount = () => {
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  const submitForm = todoData => console.log("todoData :>> ", todoData);

  const completedTodoCount = getCompletedTodoCount();
  const visibleTodos = getVisibleTodos();
  const totalTodosCount = todos.length;

  return (
    <>
      {/* <RegisterForm handleSubmit={submitForm} /> */}
      <br />
      <hr />
      <p>Всього завдань: {totalTodosCount}</p>
      <p>Виконаних завдань: {completedTodoCount}</p>
      <TodoList
        todos={visibleTodos}
        onDeleteTodo={deleteTodo}
        onToggleCompleted={toggleCompleted}
      />
      {/* Для кнопки, в якій немає тексту, а є незрозуміла іконка необхідно для доступності передавати aria-label (саме через дефіс). Воно піде у allyProps*/}
      <IconButton onClick={toggleModal} aria-label="Додати завдання">
        <IconSVG width="25" height="25" />
      </IconButton>
      {isOpenModal && (
        <Modal toggleModal={toggleModal}>
          <AddTodo onAddTodo={addTask} />
        </Modal>
      )}
      <FilterTodo
        onChange={changeFilter}
        value={filter}
        inputRef={filterInputRef} // для фокусування інпуту після закриття модального вікна
      />
    </>
  );
}

export default Todo;
