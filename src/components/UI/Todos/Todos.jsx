import Todo from "./Todo"

import classes from './Todos.module.css'

const Todos = props => {
  return (
    <ul className={classes.Todos}>
        {props.todos.map(todo => {
            return <Todo title={todo.title} key={todo.id} id={todo.id} delete={props.delete} edit={props.edit} />
        })}
    </ul>
  )
}
export default Todos