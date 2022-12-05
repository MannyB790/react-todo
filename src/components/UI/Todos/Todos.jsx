import { useContext } from 'react'
import todosContext from '../../../context/todosContext'
import Todo from './Todo'

import classes from './Todos.module.css'

const Todos = () => {
	const ctx = useContext(todosContext)

	return (
		<ul className={classes.Todos}>
			{ctx.todosCtx.map((todo) => {
				return <Todo title={todo.title} key={todo.id} id={todo.id} />
			})}
		</ul>
	)
}
export default Todos
