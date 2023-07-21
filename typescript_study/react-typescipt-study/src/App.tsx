import React, { useState, useRef } from 'react';
import TodoList from './component/TodoList';
import NewTodo from './component/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
    const orderRef = useRef<number>(0);
    const [todos, setTodos] = useState<Todo[]>([]);
    const [order, setOrder] = useState<number[]>([]);

    const onAddTodoHandler = (text: string) => {
        orderRef.current++;
        setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text: text }]);
        setOrder(prevNum => [...prevNum, orderRef.current]);
    };

    const onDeleteTodoHandler = (todoId: string) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
    };
    return (
        <div>
            <NewTodo onAddTodo={onAddTodoHandler} />
            <TodoList items={todos} order={order} onDeleteTodo={onDeleteTodoHandler} />
        </div>
    );
};

export default App;
