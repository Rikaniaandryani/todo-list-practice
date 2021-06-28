import "./Todo-list.css";

const TodoList = (props) => {
  return (
    <ul className='Todo-list'>
      {props.dataTodos.map((todo) => {
        return <li key={todo.id}>{todo.title}</li>;
      })}
    </ul>
  );
};

export default TodoList;
