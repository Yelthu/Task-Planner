import { Trash } from "lucide-react"
import { Todo } from "../types/todos"

interface TodoItemProps {
    todo: Todo,
    onCompleteChange: (id: number, completed: boolean) => void
    onDelete: (id: number) => void
}

const TodoItem = ({ todo, onCompleteChange, onDelete }: TodoItemProps) => {
    return (
        <div className="flex items-center">
            <label className="flex items-center gap-2 border rounded-md p-2 border-gray-500 bg-white hover:bg-slate-50 grow">
                <input type="checkbox" className="scale-125" checked={todo.completed} onChange={(e) => onCompleteChange(todo.id, e.target.checked)} />
                <span className={todo.completed ? "line-through text-gray-400" : ""}>
                    {todo.title}
                </span>
            </label>
            <button className="p-2" onClick={() => onDelete(todo.id)}>
                <Trash size={20} className="text-gray-500" />
            </button>
        </div>
    )
}

export default TodoItem