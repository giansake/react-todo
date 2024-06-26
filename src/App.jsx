import { useState } from "react";
import TodoEntry from "./TodoEntry";

import "./App.css";
import Form from "./Form";

const placeholderData = [
  {
    text: "groceries",
  },
  {
    text: "gym",
  },
  {
    text: "go outside",
  },
];

function App() {
  const [data, setData] = useState(placeholderData);

  function handleDelete(text) {
    return data.filter((el) => el.text !== text);
  }

  return (
    <div>
      <Form setData={setData} />
      {data.map((item, index) => {
        return (
          <TodoEntry
            key={index}
            text={item.text}
            handleDelete={handleDelete}
            setData={setData}
          />
        );
      })}
      <button onClick={() => setData(placeholderData)}>Restore</button>
    </div>
  );
}

export default App;
