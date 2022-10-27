import { useState } from "react"
import { createPortal } from "react-dom"

import Backdrop from '../Overlay/Backdrop'

import classes from './Todo.module.css'
import TodoEdit from "./TodoEdit"

const Todo = props => {
  const [checked, setChecked] = useState(false)
  const [editing, setEditing] = useState(false)

  const deleteTodoHandler = () => {
    props.delete(props.id)
  }

  const editTodoHandler = text => {
    if (!text) return setEditing(prevState => {return !prevState})

    props.edit(props.id, text)
    setEditing(false)
  }

  const checkHandler = () => {
    setChecked(prevState => !prevState)
  }

  return (
    <li>
      <p onClick={checkHandler} className={`${classes.todo} ${checked && classes.checked}`}>{props.title}</p>
      <button onClick={() => editTodoHandler()}>✏️</button>
      <button onClick={deleteTodoHandler}>❌</button>
      {editing && createPortal(<Backdrop />, document.getElementById('backdrop'))}
      {editing && createPortal(<TodoEdit editTodoHandler={editTodoHandler} />, document.getElementById('overlay'))}
    </li>
  )
}
export default Todo