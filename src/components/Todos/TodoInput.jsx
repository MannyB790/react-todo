import { useState } from "react"

const TodoInput = props => {
  const [inputText, setInputText] = useState('')

  const addTodoHandler = e => {
    e.preventDefault()

    props.addTodo(prevState => {
      return [...prevState, {
        id: Math.random(),
        title: inputText
      }]
    })
    setInputText('')
  }

  return (
    <form onSubmit={addTodoHandler}>
        <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
        <button type="submit">Add</button>
    </form>
  )
}
export default TodoInput