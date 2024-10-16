import TotoSummary from "./components/TotoSummary";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import useTodo from "./hooks/useTodo";

function App() {

  const { todos, setTodoCompleted, addTodo, deleteTodo, deletedAllCompletedTodo } = useTodo();

  return (
    <main className="py-10 h-screen space-y-5 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center">Your todos</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo} />
        <TodoList todos={todos} onCompleteChange={setTodoCompleted} onDelete={deleteTodo} />
      </div>
      <TotoSummary todos={todos} deleteAllCompleted={deletedAllCompletedTodo} />
    </main>
  )
}

export default App
