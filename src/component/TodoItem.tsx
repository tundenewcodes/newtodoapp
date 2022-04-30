import React from 'react'
import  styles from '../styles/TodoItem.module.css'
const TodoItem: React.FC<{ item: string;  removeTodo : ()=>void}> = (props) => {
  return (
    <li className={styles.item}  onClick = {props.removeTodo}>{props.item}</li>
  )
}

export default TodoItem