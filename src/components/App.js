import React, { Component } from "react";
import shortid from "shortid";
// import Counter from "./counter";
// import Dropdown from "./dropdown";
// import ColorPicker from "./colorpicker";
import TodoList from "./todoList";
import initialTodos from "./todos.json";
import Container from "./Container/Container";
import Form from "./Form";
import TodoEditor from "./todoEditor/TodoEditor";
import Filter from "./Filter";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };
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

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;

    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <Container>
        <h1>Forms</h1>
        {/* <Form onSubmita={this.formSubmitHandler} /> */}
        {/* <Counter initialValue={10} /> */}
        {/* 
        <Dropdown /> */}
        {/* <ColorPicker options={colorPickerOptions} /> */}

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
