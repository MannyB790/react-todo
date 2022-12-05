import { useContext } from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import todosContext from '../../../context/todosContext'

import Backdrop from '../Overlay/Backdrop'

import classes from './Todo.module.css'
import TodoEdit from './TodoEdit'

const Todo = (props) => {
	const [checked, setChecked] = useState(false)
	const [editing, setEditing] = useState(false)

	const ctx = useContext(todosContext)

	const deleteTodoHandler = () => {
		ctx.deleteTodoHandler(props.id)
	}

	const editTodoHandler = (text) => {
		if (!text)
			return setEditing((prevState) => {
				return !prevState
			})

		ctx.editTodoHandler(props.id, text)
		localStorage.setItem('tasks', JSON.stringify(ctx.todosCtx))
		setEditing(false)
	}

	const checkHandler = () => {
		setChecked((prevState) => !prevState)
	}

	return (
		<li className={classes.todo}>
			<p
				onClick={checkHandler}
				className={`${classes.todo} ${checked && classes.checked}`}
			>
				{props.title}
			</p>
			<div className={classes.controls}>
				<button onClick={() => editTodoHandler()}>✏️</button>
				<button onClick={deleteTodoHandler}>❌</button>
			</div>
			{editing &&
				createPortal(<Backdrop />, document.getElementById('backdrop'))}
			{editing &&
				createPortal(
					<TodoEdit editTodoHandler={editTodoHandler} />,
					document.getElementById('overlay')
				)}
		</li>
	)
}
export default Todo
