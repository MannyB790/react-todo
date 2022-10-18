import { useState } from "react"
import TodoInput from "./components/Todos/TodoInput"
import Todos from "./components/Todos/Todos"

function App() {
  const [todos, setTodos] = useState([])

	return <div>
    <TodoInput addTodo={setTodos} />
    <Todos todos={todos} />
  </div>
}

export default App
