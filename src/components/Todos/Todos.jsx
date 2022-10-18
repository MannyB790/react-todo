import Todo from "./Todo"

const Todos = props => {
  return (
    <ul>
        {props.todos.map(todo => {
            return <Todo title={todo.title} key={todo.id} id={todo.id} delete={props.delete} edit={props.edit} />
        })}
    </ul>
  )
}
export default Todos