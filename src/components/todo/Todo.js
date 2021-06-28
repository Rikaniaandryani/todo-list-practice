import "./Todo.css";
import { useState } from "react";
import TodoList from "../todo-list/Todo-list";
import TodoCreate from "../todo-create/Todo-create";

const Todo = () => {
  const [getTodos, setTodos] = useState([
    { id: 1, title: "Belajar React 1" },
    { id: 2, title: "belajar React 2" },
  ]);

  const addDatatoList = (todo) => {
    setTodos(getTodos.concat(todo));
    console.log(getTodos);
  };

  return (
    <div className='Todo'>
      <h1>TODO LIST PRACTICE</h1>;
      <TodoCreate onChangeData={addDatatoList} />
      <TodoList dataTodos={getTodos} />
    </div>
  );
};

export default Todo;
