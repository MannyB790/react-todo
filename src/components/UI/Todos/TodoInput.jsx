import { useContext } from 'react'
import todosContext from '../../../context/todosContext'

import classes from './TodoInput.module.css'

const TodoInput = () => {
	const ctx = useContext(todosContext)

	return (
		<form onSubmit={ctx.addTodoHandler} className={classes.Input}>
			<input
				type="text"
				value={ctx.inputText}
				onChange={(e) => ctx.inputTextHandler(e.target.value)}
				required
			/>
			<button type="submit">Add</button>
		</form>
	)
}
export default TodoInput
