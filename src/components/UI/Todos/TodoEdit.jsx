import { useState } from 'react'
import classes from './TodoEdit.module.css'

const TodoEdit = (props) => {
	const [edit, setEdit] = useState('')

	const submitHandler = (e) => {
		e.preventDefault()

		if (edit) {
			props.editTodoHandler(edit)
		} else {
			props.editTodoHandler()
		}
	}

	return (
		<form className={classes.Form} onSubmit={submitHandler}>
			<label>Edit Task.</label>
			<input type="text" onChange={(e) => setEdit(e.target.value)} />
			<div className={classes.Controls}>
				<button type="submit">Edit</button>
				<button type="submit">Close</button>
			</div>
		</form>
	)
}
export default TodoEdit
