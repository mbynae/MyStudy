import { Todo } from '../todo.model';

interface TodoListProps {
    items: Todo[];
    order?: number[] | never; //첫번째 방법
    onDeleteTodo: (id: string) => void;
}

const TodoList = ({ items, order, onDeleteTodo }: TodoListProps) => {
    return (
        <ul>
            {items.map((todo, index) => (
                <li key={todo.id} style={{ marginBottom: '5px' }}>
                    <span style={{ marginRight: '20px' }}>{todo.text}</span>
                    {order && <span style={{ marginRight: '20px' }}>{order[index]}번</span>}
                    <button onClick={onDeleteTodo.bind(null, todo.id)}>삭제</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
