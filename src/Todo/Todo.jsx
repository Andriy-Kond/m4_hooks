import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";

// import initialTodos from "./dataBase/todos.json";

import { ReactComponent as IconSVG } from "./icons/add_icon.svg";
import Modal from "Modal";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
import IconButton from "./components/IconButton";

import RegisterForm from "../SignupForm/RegisterForm";
import { ImClearFormatting } from "react-icons/im";

function Todo() {
  // У початковий стан записую розпарсений localStorage:
  const [todos, setTodos] = useState(
    // Якщо не зробити ледачу ініціалізацію стану (тобто просто передати туди перевірку "локал сторидж чи пустий масив"), то useState буде виконувати цю перевірку на кожному рендері. Якщо ж огорнути перевірку у функцію, то useState викличе її лише при першому рендері.
    () => {
      console.log(
        "Робиться початковий стан для useState (ледача ініціалізація)",
      );

      const savedTodos = window.localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    },
  );

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
    window.localStorage.setItem("todos", JSON.stringify(todos));
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
