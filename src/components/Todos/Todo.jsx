const Todo = props => {
  const deleteTodoHandler = () => {
    props.delete(props.id)
  }

  const editTodoHandler = () => {
    const editedTodo = prompt("New Edit")
    props.edit(props.id, editedTodo)
  }

  return (
    <li>
      {props.title}
      <button onClick={editTodoHandler}>✏️</button>
      <button onClick={deleteTodoHandler}>❌</button>
    </li>
  )
}
export default Todo