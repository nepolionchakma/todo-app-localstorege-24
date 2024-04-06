import React, { useState } from 'react';
import { useTodo } from './Contexts/TodoContext';

const Form = () => {
    const [todo, setTodo] = useState('')
    const { addTodo } = useTodo()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!todo) return
        addTodo({ todo, completed: 'false' })
        // addTodo({id:Date.now(),todo:todo,completed:'false'}) 
        setTodo('')
    }
    // console.log(todo);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTodo(e.target.value)} value={todo} className='rounded-s-lg outline-none px-4 py-2' />
                <button type="submit" className='rounded-e-lg outline-none px-4 py-2 bg-green-700'>add</button>
            </form>
        </div>
    );
};

export default Form;