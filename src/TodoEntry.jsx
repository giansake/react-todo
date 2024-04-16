import { useState } from "react";
import { LayoutGroup, AnimatePresence, motion } from "framer-motion";

const TodoEntry = ({ text = "placeholder", handleDelete, setData }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="todo-row-container">
      <LayoutGroup>
        <motion.div layout className="todo-entry">
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => setIsSelected(!isSelected)}
          />
          <span>{text}</span>
        </motion.div>

        <AnimatePresence>
          {isSelected && (
            <motion.div
              layout
              className="delete"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                onClick={() => {
                  setData(handleDelete(text));
                  setIsSelected(false);
                }}
              >
                Delete
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </LayoutGroup>
    </div>
  );
};

export default TodoEntry;
