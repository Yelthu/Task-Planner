import { Todo } from "../types/todos"
import TodoItem from "./TodoItem"
interface TodoListProps {
    todos: Todo[],
    onCompleteChange: (id: number, completed: boolean) => void,
    onDelete: (id: number) => void
}

const TodoList = ({ todos, onCompleteChange, onDelete }: TodoListProps) => {

    const todosSorted = todos.sort((a, b) => {
        if (a.completed === b.completed) {
            return b.id - a.id
        }
        return a.completed ? 1 : -1
    })

    return (
        <>
            <div className="space-y-2">
                {
                    todosSorted.map((todo) => (
                        <TodoItem key={todo.id} todo={todo} onCompleteChange={onCompleteChange} onDelete={onDelete} />
                    ))
                }
            </div>
            {
                todos.length === 0 && (
                    <p className="text-center text-sm text-gray-500">No todos yet. Add a new one.</p>
                )
            }
        </>
    )
}

export default TodoList