import Todo from "./Todo"

const Todos = props => {
  return (
    <ul>
        {props.todos.map(todo => {
            return <Todo title={todo.title} key={todo.id} />
        })}
    </ul>
  )
}
export default Todos