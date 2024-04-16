import { useState } from "react";

const Form = ({ setData }) => {
  const [text, setText] = useState();

  function handleSubmit(ev) {
    ev.preventDefault();

    setData((prev) => {
      const existAlready = prev.findIndex((el) => el.text === text);
      if (existAlready > -1) {
        alert("Task already there! DO IT");
        return prev;
      } else {
        return [
          ...prev,
          {
            text: text,
          },
        ];
      }
    });
  }

  return (
    <form onSubmit={(ev) => handleSubmit(ev)}>
      <input
        type="text"
        name="text"
        autoComplete="true"
        required={true}
        onChange={(ev) => setText(ev.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
