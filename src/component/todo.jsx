import React, {useState} from 'react';
import './todo.css';

const TodoApp = ()=> {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState('');

    const handleInputChange = (e)=> {
        setNewTodo(e.target.value);
    };

    const handleAddTodo = () => {
        if (newTodo.trim() !== ''){
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const handleDeleteTodo = (index)=> {
        const updatedTodos = todos.filter((_, i)=> i !== index);
        setTodos(updatedTodos);
    };

    const handleEditTodo = (index)=> {
        setEditIndex(index);
        setEditText(todos[index]);
    };

    const handleEditChange = (e)=> {
        setEditText(e.target.value);
    };

    const handleSaveEdit = ()=> {
        const updatedTodos = todos.map((todo, index)=>
        index === editIndex ? editText : todo
    );
        setTodos(updatedTodos);
        setEditIndex(null);
        setEditText(''); 
    };

    return (
        <div className="todo-app">
            <h1>Todo List</h1>
            <div className="input-container">
                <input
                    type='text'
                    value={newTodo}
                    onChange={handleInputChange}
                    placeholder='Add a new task'
                />
                <button onClick={handleAddTodo}>Add</button>
            </div>
            <ul className='todo-list'>
                {todos.map((todo, index) => (
                    <li key={index} className='todo-item'>
                        {editIndex === index ? (
                            <>
                                <input
                                    type='text'
                                    value={editText}
                                    onChange={handleEditChange}
                                />
                                <button onClick={handleSaveEdit}>Save</button>
                            </>
                        ) : (
                            <>
                                {todo}
                                <button onClick={()=> handleEditTodo(index)}>Edit</button>
                                <button onClick={()=> handleDeleteTodo(index)}>Delete</button>
                            </>
                        )} 
                       
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoApp;