import { Todo } from "../types/todos"

interface TotoSummaryProps {
    todos: Todo[],
    deleteAllCompleted: () => void
}

const TotoSummary = ({ todos, deleteAllCompleted }: TotoSummaryProps) => {

    const completedTodos = todos.filter(todo => todo.completed)

    return (
        <div className="text-center space-y-2">
            <p className="text-sm font-medium">
                {completedTodos.length}/{todos.length} todos completed.
            </p>
            {
                completedTodos.length > 0 && (
                    <button className="text-red-500 hover:underline text-sm font-medium" onClick={deleteAllCompleted}>
                        Delete All Completed
                    </button>
                )
            }
        </div>
    )
}

export default TotoSummary