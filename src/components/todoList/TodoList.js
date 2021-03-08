import React from "react";
import classNames from "classnames";
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
        <input
          type="checkbox"
          checked={completed}
          onChange={() => onToggleCompleted(id)}
        />
        <p className="TodoList__text">{text}</p>
        <button onClick={() => onDeleteTodo(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default TodoList;
