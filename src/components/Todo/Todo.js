import React from "react";
import IconButton from "../IconButton";
import { ReactComponent as DeleteIcon } from "../../icons/delete.svg";

const Todo = ({ text, completed, onToggleCompleted, onDeleteTodo }) => (
  <div>
    <input type="checkbox" checked={completed} onChange={onToggleCompleted} />
    <p className="TodoList__text">{text}</p>
    <button onClick={onDeleteTodo}>Delete</button>
  </div>
);

export default Todo;
