import React from 'react';


const Form = ({ setInputText, todos, setTodo, inputText }) => {


    const inputTextHandler = (e) =>{

        setInputText(e.target.value)
    }

    const submitTodoHandler = (e) =>{
        e.preventDefault();

        setTodo([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ])

        setInputText('')
    }

    return (
        <form onSubmit={ submitTodoHandler }>
            <input onChange={ inputTextHandler } type="text" className="todo-input" value={ inputText }/>
            <button    className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}


export default Form;