import React, { Component } from "react";
import { nanoid } from "nanoid";

import initialTodos from "./dataBase/todos.json";

import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";
import FilterTodo from "./components/FilterTodo";
import Modal from "./components/Modal";

import IconButton from "./components/IconButton";
import { ReactComponent as IconSVG } from "./icons/add_icon.svg";

// import RegisterForm from "TodoList/RegisterForm";

class App extends Component {
  state = {
    todos: [],
    filter: "",
    isOpenModal: false,
    isOpenTimer: false,
  };

  componentDidMount = () => {
    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    parsedTodos && this.setState({ todos: parsedTodos });
  };

  componentDidUpdate(prevProps, prevState) {
    // console.log("App >> componentDidUpdate >> prevState:::", prevState);
    // console.log("App >> componentDidUpdate >> this.state :>> ", this.state);

    const prevTodos = prevState.todos;
    const nextTodos = this.state.todos;

    if (prevTodos !== nextTodos) {
      localStorage.setItem("todos", JSON.stringify(nextTodos));
    }

    // // Закриття модального вікна (виклик this.toggleModal()) замість його виклику у addTask:
    // if (prevTodos.length < nextTodos.length && prevTodos.length !== 0) {
    //   this.toggleModal();
    // }
    // // Перевірка prevTodos.length !== 0 необхідна, бо при першому рендерінгу в нас пустий масив змінюється на поточний. Тобто спрацьовує перевірка prevTodos.length < todos.length і модалка одразу відкрита.
    // ! АЛЕ ! Це помилка, бо коли LS пустий, то при додаванні першого todo модалка не закриється.
  }

  deleteTodo = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.filter(todo => todo.id !== todoId),
    }));
  };

  toggleCompleted = todoId => {
    this.setState(({ todos }) => ({
      todos: todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo,
      ),
    }));
  };

  addTask = text => {
    const newTodo = { id: nanoid(), text, completed: false };

    this.setState(prevState => {
      return {
        todos: [newTodo, ...prevState.todos],
      };
    });

    this.toggleModal();
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return todos.filter(todo =>
      todo.text.toLowerCase().includes(normalizedFilter),
    );
  };

  getCompletedTodoCount = () => {
    const { todos } = this.state;
    return todos.reduce((acc, todo) => (todo.completed ? acc + 1 : acc), 0);
  };

  submitForm = todoData => console.log("todoData :>> ", todoData);

  toggleModal = () => {
    this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
  };

  toggleTimer = () => {
    this.setState(prevState => ({ isOpenTimer: !prevState.isOpenTimer }));
  };

  render() {
    const { todos, filter, isOpenModal, isOpenTimer, isAddTodoOpen } =
      this.state;
    const completedTodoCount = this.getCompletedTodoCount();
    const visibleTodos = this.getVisibleTodos();
    const totalTodosCount = todos.length;

    return (
      <>
        {/* Todo List */}
        <p>Всього завдань: {totalTodosCount}</p>
        <p>Виконаних завдань: {completedTodoCount}</p>
        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
        {/* Для кнопки, в якій немає тексту, а є незрозуміла іконка необхідно для доступності передавати aria-label (саме через дефіс). Воно піде у allyProps*/}
        <IconButton onClick={this.toggleModal} aria-label="Додати завдання">
          <IconSVG width="25" height="25" />
        </IconButton>

        {isOpenModal && (
          <Modal toggleModal={this.toggleModal}>
            <AddTodo onAddTodo={this.addTask} />
          </Modal>
        )}

        <FilterTodo onChange={this.changeFilter} value={filter} />

        {/* Login Form */}
        {/* <br />
        <LoginForm /> */}

        {/* Modal window */}
        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>

        {isOpenModal && (
          <Modal toggleModal={this.toggleModal}>
            <h2> It is title of modal window</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              quis debitis quibusdam doloremque perspiciatis distinctio
              consequuntur nobis ipsa dolore earum quisquam qui eveniet maxime
              ad, numquam libero quos, veritatis accusantium similique tempora
              nemo? Quo consequuntur iusto eius aut facilis doloribus aliquam
              quae vitae dolor voluptatibus? Accusamus corrupti cumque odio
              illo.
            </p>
          </Modal>
        )} */}

        {/* Clock */}
        {/* {isOpenTimer && <Clock />}
        <button type="button" onClick={this.toggleTimer}>
          Open/close Timer
        </button> */}

        {/* Tabs (shouldComponentUpdate) */}
        {/* <Tabs items={tabs} /> */}

        {/* Icon Button */}
        {/* <IconButton>
          <IconSVG width="120" height="120" />
        </IconButton> */}
      </>
    );
  }
}

export default App;
