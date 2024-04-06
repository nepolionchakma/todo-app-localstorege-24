import React from 'react';
import Form from './Form';
import { useTodo } from './Contexts/TodoContext';
import FormItems from './FormItems';

const Home = () => {
    const { todos } = useTodo()
    return (
        <div>
            <Form />
            <div>
                {
                    todos.map((todo) => (
                        <div key={todo.id}>
                            <FormItems todo={todo} />
                        </div>))
                }
            </div>
        </div>
    );
};

export default Home;