import { useState, useEffect } from 'react'
import TodoInput from './components/UI/Todos/TodoInput'
import Todos from './components/UI/Todos/Todos'

function App() {
	const [todos, setTodos] = useState([])

	useEffect(() => {
		if (todos.length > 0) {
			localStorage.setItem('tasks', JSON.stringify(todos))
		} else {
			localStorage.clear()
		}
	}, [todos])

	useEffect(() => {
		const tasks = localStorage.getItem('tasks')
		const parsedTasks = JSON.parse(tasks)
		setTodos(parsedTasks)
	}, [])

	const deleteTodoHandler = (id) => {
		setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
	}

	const editTodoHandler = (id, editedTodo) => {
		setTodos((prevState) =>
			prevState.map((todo) => {
				if (todo.id === id) {
					return { ...todo, title: editedTodo }
				} else {
					return todo
				}
			})
		)
	}

	return (
		<div>
			<TodoInput addTodo={setTodos} todos={todos} />
			<Todos todos={todos} delete={deleteTodoHandler} edit={editTodoHandler} />
		</div>
	)
}

export default App
