import { useState, useEffect, createContext } from 'react'

const todosContext = createContext({
	todosCtx: [],
	inputText: '',
	addTodoHandler: (e) => {},
	editTodoHandler: (id, editTodo) => {},
	deleteTodoHandler: (id) => {},
	inputTextHandler: (e) => {},
})

export const TodosContextProvider = (props) => {
	const [inputText, setInputText] = useState('')
	const [todos, setTodos] = useState([])

	useEffect(() => {
		const stored = localStorage.getItem('tasks')
		if (stored) {
			setTodos(JSON.parse(stored))
		}
	}, [])

	useEffect(() => {
		if (todos.length) {
			const stringified = JSON.stringify(todos)
			localStorage.setItem('tasks', stringified)
		}
		if (todos.length === 0) {
			localStorage.clear()
		}
	}, [todos])

	const inputTextHandler = (e) => {
		setInputText(e)
	}

	const addTodoHandler = (e) => {
		e.preventDefault()

		if (!inputText) return alert('Input field must be filled!')

		const id = Math.random()

		setTodos((prevState) => {
			return [
				...prevState,
				{
					id: id,
					title: inputText,
				},
			]
		})
		setInputText('')
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

	const deleteTodoHandler = (id) => {
		setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
	}

	return (
		<todosContext.Provider
			value={{
				todosCtx: todos,
				inputText: inputText,
				addTodoHandler: addTodoHandler,
				editTodoHandler: editTodoHandler,
				deleteTodoHandler: deleteTodoHandler,
				inputTextHandler: inputTextHandler,
			}}
		>
			{props.children}
		</todosContext.Provider>
	)
}

export default todosContext
