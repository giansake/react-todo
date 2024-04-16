import { useState } from "react";

const Form = ({ setData }) => {
  const [text, setText] = useState();

  function handleSubmit(ev) {
    ev.preventDefault();

    setData((prev) => [
      ...prev,
      {
        text: text,
      },
    ]);
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
