import React, { useState } from 'react';
import { useTodo } from './Contexts/TodoContext';
import { isElement } from 'react-dom/test-utils';

const FormItems = ({ todo }) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()
    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }
    const toggleCompleted = () => {
        toggleComplete(todo.id)
    }

    // console.log(todos);
    return (
        <div className='flex flex-col gap-3'>
            <div className={`flex border border-black/10 rounded-xl text-black duration-500 ${todo.completed ? 'bg-[#c6e9a7]' : 'bg-[#ccbed7]'}`}>
                <input
                    type="checkbox"
                    className='cursor-pointer'
                    checked={todo.completed}
                    onChange={toggleCompleted} />
                <input
                    className={`outline-none ${isTodoEditable ? 'border-black/10 px-2' : 'border-transparent'}`}
                    type="text"
                    value={todoMsg}
                    onChange={(e) => setTodoMsg(e.target.value)}
                    readOnly={!isTodoEditable} />
                <button
                    className='bg-slate-400 p-4 rounded-2xl mx-3'
                    onClick={() => {
                        if (todo.copleted) return;
                        if (isTodoEditable) {
                            editTodo();
                        } else {
                            setIsTodoEditable((prev) => !prev);
                        };
                    }}
                    disabled={todo.completed}
                >
                    {isTodoEditable ? 'Save' : 'Edit'}
                </button>
                <button
                    className='bg-slate-400 p-4 rounded-2xl mx-3'
                    onClick={() => deleteTodo(todo.id)}>
                    X
                </button>
            </div>

        </div>
    );
};

export default FormItems;