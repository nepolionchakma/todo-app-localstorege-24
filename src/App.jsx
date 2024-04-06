import { useEffect, useState } from 'react';
import './App.css'
import { TodoProvider } from './Contexts/TodoContext';
import Form from './Form';
import FormItems from './FormItems';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prev) => [...prev, { id: Date.now(), ...todo }])
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodoItem) => (prevTodoItem.id === id ? todo : prevTodoItem)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodoItem) => (prevTodoItem.id != id)))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className='max-w-xl mx-auto py-9 bg-slate-300 px-9 rounded-lg'>
        <div>
          <Form />
        </div>
        <div>
          {
            todos.map((todo) => (
              <div key={todo.id}>
                <FormItems todo={todo} />
              </div>))
          }
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
