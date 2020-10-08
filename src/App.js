import React, { useState } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';


function App() {

  const [ inputText, setInputText ] = useState('');
  const [ todos, setTodo ] = useState([]);

  return (

    <div className="App">
      <header>
        <h2>React Todo</h2>
      </header>
      <Form inputText={ inputText } setInputText={ setInputText } todos={ todos } setTodo={ setTodo }/>
      <TodoList todos={ todos } setTodo={ setTodo }/>
      
    </div>
  );
}

export default App;
