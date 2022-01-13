import React from "react";
import TodoItem from "./item/TodoItem";
import { useState } from "react";

const data = [
  { _id: 1, title: "Finish the essay collaboration", isCompleted: false },
  {
    _id: 2,
    title: "Read next charpter",
    isCompleted: true,
  },
  {
    _id: 3,
    title: "Finish the essay collaboration",
    isCompleted: false,
  },
];

const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = id => {
    const copy = [...todos];
    const current = copy.find(t => t._id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };

  const removeTodo = id => {
    setTodos([...todos].filter(t => t._id != id));
  };

  return (
    <div className=' py-10 bg-zinc-900 h-screen text-white w-4/5 mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-10'>Todo for junior</h1>
      {todos.map(todo => (
        <TodoItem
          key={todo._id}
          todo={todo}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default Home;
