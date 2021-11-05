import React, { useState } from 'react';
import './App.css';
import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todoSlice";

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ text }));
    setText('');
  }

  const handleTextChange = ({ target: { value } }) => {
    setText(value);
  }


  return (
    <div className="App">
      <div className="container">
        <h1 className="todo__slogan">TodoList App</h1>
        <InputField text={text} handleInput={handleTextChange} handleSubmit={addTask}/>
        <TodoList/>
      </div>
    </div>
  );
}

export default App;
