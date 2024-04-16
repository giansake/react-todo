import { useState } from "react";

const Form = ({ setData }) => {
  const [formData, setFormData] = useState();

  function handleSubmit(ev) {
    ev.preventDefault();
    setData((prev) => [
      ...prev,
      {
        text: formData,
      },
    ]);
  }

  return (
    <form onSubmit={(ev) => handleSubmit(ev)}>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        onChange={(ev) => setFormData(ev.target.value)}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};

export default Form;
