import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';


function App() {

  const [ inputText, setInputText ] = useState(''); // Text from the input form
  const [ todos, setTodo ] = useState([]);          // array of object todos
  const [ status, setStatus] = useState('all');     // status of the array if completed or not
  const [ filterTodos, setFilterTodos] = useState([]); // filter out comleted array of todo

  // To run when page load to get item of tods from local storage
  useEffect(()=>{
    getLocalTodos()
  }, [])


  // to run when filter todos if completed or not.
  useEffect(()=>{

    filterHandler() 
    saveLocalTodos()  

  }, [status, todos])


  // filter todos if completed or not.
  const filterHandler = () =>{

    switch (status) {
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
      
      case 'uncompleted':
        setFilterTodos(todos.filter(todo => todo.completed === false));
        break;
    
      default:
        setFilterTodos(todos);
        break;
    }
  }


  // save too local storege
  const saveLocalTodos = () =>{
    
    localStorage.setItem('todos', JSON.stringify(todos))

  }

  //get todos in local storage
  const getLocalTodos = () =>{
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
      
    }else{
      let localTodo = JSON.parse(localStorage.getItem('todos'));
      setTodo(localTodo);
    }

  }
  return (

    <div className="App">
      <header>
        <h2>React Todo</h2>
      </header>
      <Form 
        inputText={ inputText } 
        setInputText={ setInputText } 
        todos={ todos } 
        setTodo={ setTodo }
        status={ status }
        setStatus={ setStatus }
        
      />
      <TodoList todos={ todos } setTodo={ setTodo } filterTodos={ filterTodos }/>
      
    </div>
  );
}

export default App;
