import React from "react";
import classNames from "classnames";
import Todo from "../Todo";
import "./TodoList.css";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className="TodoList">
    {todos.map(({ id, text, completed }) => (
      <li
        className={classNames("TodoList__item", {
          "TodoList__item--completed": completed,
        })}
        key={id}
      >
        <Todo
          text={text}
          completed={completed}
          onToggleCompleted={() => onToggleCompleted(id)}
          onDeleteTodo={() => onDeleteTodo(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
