import { useState } from "react";

const TodoEntry = ({ text = "placeholder", handleDelete, setData }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="todo-row-container">
      <div className="todo-entry">
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => setIsSelected(!isSelected)}
        />
        <span>{text}</span>
      </div>

      {isSelected && (
        <div className="delete">
          <button
            onClick={() => {
              setData(handleDelete(text));
              setIsSelected(false);
            }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoEntry;
