import { useState } from 'react'

import classes from './TodoInput.module.css'

const TodoInput = (props) => {
	const [inputText, setInputText] = useState('')

	const addTodoHandler = (e) => {
		e.preventDefault()

		if (!inputText) return alert('Input field must be filled!')

		const id = Math.random()

		props.addTodo((prevState) => {
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

	return (
		<form onSubmit={addTodoHandler} className={classes.Input}>
			<input
				type="text"
				value={inputText}
				onChange={(e) => setInputText(e.target.value)}
				required
			/>
			<button type="submit">Add</button>
		</form>
	)
}
export default TodoInput
