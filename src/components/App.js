import React, { Component } from "react";
// import Counter from "./counter";
// import Dropdown from "./dropdown";
// import ColorPicker from "./colorpicker";
import TodoList from "./todoList";
import initialTodos from "./todos.json";

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
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;

    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    return (
      <>
        <h1>Events and states</h1>
        {/* <Counter initialValue={10} /> */}

        {/* <Dropdown /> */}

        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <p>Total amount Todoes: {totalTodoCount}</p>
          <p>Fulfil amount Todoes: {completedTodoCount}</p>
        </div>

        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}
export default App;
