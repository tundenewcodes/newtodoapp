import React, { useContext } from 'react'
import { TodosContext } from '../store/todo-context'
import TodoItem from './TodoItem'
import  styles from '../styles/Todos.module.css'

const Todo: React.FC  = () => {
  const  todoCtx  = useContext(TodosContext)
  
  return (
      <ul  className={styles.todos}>
          {todoCtx.item.map((itm) => (
            <TodoItem  item= {itm.text}   key= {itm.id}  removeTodo ={todoCtx.removeTodo.bind(null,itm.id)}/>
          ))}</ul>
  )
}

export default Todo