import React, { useRef, useContext } from 'react'
import { TodosContext } from '../store/todo-context'
import styles from '../styles/NewTodo.module.css'
const NewTodo:React.FC = () => {
    
const TodosCtx = useContext(TodosContext)
    const inputRef = useRef<HTMLInputElement>(null)
    const submitFormHandler = (e : React.FormEvent) => {
        e.preventDefault()
        let inputText = inputRef.current!.value
        
        
        if (inputText?.trim().length === 0) {
            return
        }

        TodosCtx.addTodo(inputText)
        
   inputRef.current!.value = ''

    }
  return (
      <form onSubmit={submitFormHandler} className= {styles.form}>
          <label htmlFor="text"  >Todo Text</label>
          <input type="text"     ref={inputRef}/>
          <button>add item</button>
      </form>
  )
}

export default NewTodo