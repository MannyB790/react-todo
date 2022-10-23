import { useState } from "react"

import classes from './Todo.module.css'

const Todo = props => {
  const [checked, setChecked] = useState(false)

  const deleteTodoHandler = () => {
    props.delete(props.id)
  }

  const editTodoHandler = () => {
    const editedTodo = prompt("New Edit")
    props.edit(props.id, editedTodo)
  }

  const checkHandler = () => {
    setChecked(prevState => !prevState)
  }

  return (
    <li>
      <p onClick={checkHandler} className={`${classes.todo} ${checked && classes.checked}`}>{props.title}</p>
      <button onClick={editTodoHandler}>✏️</button>
      <button onClick={deleteTodoHandler}>❌</button>
    </li>
  )
}
export default Todo