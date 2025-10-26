import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <div className="task" data-testid="task-item">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={onDelete}>X</button>
    </div>
  );
}

export default Task;