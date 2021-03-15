import React, { Component } from "react";
import shortid from "shortid";

import TodoList from "./todoList";
import initialTodos from "./todos.json";
import Container from "./Container/Container";
import Form from "./Form";
import TodoEditor from "./todoEditor/TodoEditor";
import Filter from "./Filter";
import Modal from "./Modal";

import IconButton from "./IconButton";
import { ReactComponent as AddIcon } from "../icons/add.svg";

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
    showModal: false,
  };

  componentDidMount() {
    console.log("App componentDidMount");

    const todos = localStorage.getItem("todos");
    const parsedTodos = JSON.parse(todos);

    if (parsedTodos) {
      this.setState({ todos: parsedTodos });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.todos !== prevState.todos) {
      localStorage.setItem("todos", JSON.stringify(this.state.todos));
    }
  }

  addTodo = (text) => {
    console.log(text);
    const todo = {
      id: shortid.generate(),
      text,
      completed: false,
    };
    this.setState(({ todos }) => ({
      todos: [todo, ...todos],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };
  toggleCompleted = (todoId) => {
    console.log(todoId);

    // this.setState((prevState) => ({
    //   todos: prevState.todos.map((todo) => {
    //     if (todo.id === todoId) {
    //       console.log("find, what we need");
    //       return {
    //         ...todo,
    //         completed: !todo.completed,
    //       };
    //     }
    //     return todo;
    //   }),
    // }));
    // деструктуризировали prevState в {todos}
    this.setState(({ todos }) => ({
      todos: todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  handleNameChange = (event) => {
    console.log(event.currentTarget.value);
    this.setState({ name: event.currentTarget.value });
  };

  formSubmitHandler = (data) => {
    console.log(data);
  };
  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleTodos = () => {
    const { filter, todos } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(normalizedFilter)
    );
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todos, showModal } = this.state;

    const totalTodoCount = todos.length;

    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <Container>
        <h1>Rest-API</h1>
        <IconButton onClick={this.toggleModal} aria-label="Add note">
          <AddIcon width="40" height="40" />
        </IconButton>
        {/* <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>Hi, its Modal content</h1>
            <p>
              loremjlkasjlkasjdaklsjdklasjdasjdalsdj
              asdlasdasdkasdaklsdaksldaksdjasldasdkjal jskl
            </p>
            <button type="button" onClick={this.toggleModal}>
              Close
            </button>
          </Modal>
        )}
        {/* <Form onSubmita={this.formSubmitHandler} /> */}

        <TodoEditor onSubmita={this.addTodo} />
        <div>
          <p>Total amount Todoes: {totalTodoCount}</p>
          <p>Fulfil amount Todoes: {completedTodoCount}</p>
        </div>
        <Filter value={this.state.filter} onChangea={this.changeFilter} />
        <TodoList
          todos={this.getVisibleTodos()}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleCompleted}
        />
      </Container>
    );
  }
}
export default App;
