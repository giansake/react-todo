import { useState, useEffect } from "react";

import TodoEntry from "./TodoEntry";
import Form from "./Form";

import "./App.css";

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
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setError(null);
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(`http://localhost:1337/api/tasks`, {
          method: "GET",
        });
        if (!response.ok) {
          throw new Error(`Qualcosa è andato storto: ${response.status}`);
        }
        let responseData = await response.json();
        setData(
          responseData.data.map((el) => {
            return {
              id: el.id,
              ...el.attributes,
            };
          })
        );
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  console.log(data);

  function handleDelete(text) {
    return data.filter((el) => el.label !== text);
  }

  return (
    <div>
      <Form setData={setData} />
      {!isLoading &&
        data.map((item, index) => {
          return (
            <TodoEntry
              key={index}
              text={item.label}
              handleDelete={handleDelete}
              setData={setData}
            />
          );
        })}

      {/* 
      <button onClick={() => setData(placeholderData)}>Restore</button> */}
    </div>
  );
}

export default App;
