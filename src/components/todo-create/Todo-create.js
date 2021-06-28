import "./Todo-create.css";
import { useState } from "react";

const TodoCreate = (props) => {
  const [getListTodo, setListTodo] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 100) + 1,
      title: getListTodo,
    };

    props.onChangeData(newTodo);

    setListTodo("");
  };

  const createList = (event) => {
    setListTodo(event.target.value);
  };
  return (
    <form className='form-input' onSubmit={handleSubmit}>
      <input type='text' value={getListTodo} onChange={createList} />
      <button type='submit'>Add</button>
    </form>
  );
};

export default TodoCreate;
