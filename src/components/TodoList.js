import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodo, filterTodos }) => {

    return (

        <div className="todo-container">
            <ul className="todo-list">
                { filterTodos.map( (todo) => (
                    <Todo 
                        text={ todo.text } 
                        key={ todo.id } 
                        id={todo.id} 
                        completed={ todo.completed } 
                        todos={ todos } 
                        todo={ todo } 
                        setTodo={ setTodo }
                    />
                ))}
            </ul>
        </div>

    );
}

export default TodoList;