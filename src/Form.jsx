import { useState } from "react";

const Form = ({ setData }) => {
  const [text, setText] = useState();

  async function handleSubmit(ev) {
    ev.preventDefault();

    const response = await fetch(`http://localhost:1337/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          label: text,
        },
      }),
    });

    try {
      const data = await response.json();
      if (response.ok) {
        setData((prev) => [
          ...prev,
          { id: data.data.id, label: data.data.attributes.label },
        ]);
      }
    } catch (error) {
      console.log("Error");
    }
  }

  return (
    <form onSubmit={(ev) => handleSubmit(ev)}>
      <input
        type="text"
        name="label"
        autoComplete="true"
        required={true}
        onChange={(ev) => setText(ev.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
