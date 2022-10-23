import { useState } from "react"
import Backdrop from "./components/UI/Overlay/Backdrop"
import TodoInput from "./components/UI/Todos/TodoInput"
import Todos from "./components/UI/Todos/Todos"

function App() {
  const [todos, setTodos] = useState([])

  const deleteTodoHandler = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  const editTodoHandler = (id, editedTodo) => {
    setTodos(prevState => prevState.map(todo => {
      if (todo.id === id) {
        return {...todo, title: editedTodo}
      } else {
        return todo
      }
    }))
  }

	return <div>
    <TodoInput addTodo={setTodos} />
    <Todos todos={todos} delete={deleteTodoHandler} edit={editTodoHandler} />
  </div>
}

export default App
