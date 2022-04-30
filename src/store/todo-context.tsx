import  Todo from  '../models/todos'
import   React,{useState}  from  'react'

 type  todoContextObj = {
    item: Todo[],
    addTodo: (text : string) => void,
    removeTodo : (id : string) =>void
}

export  const TodosContext = React.createContext<todoContextObj>({
    item : [],
    addTodo: () =>{},
    removeTodo : (id : string)=>{}
})


const TodosContextProvider: React.FC = (props) => {
    const [todos, setTodos] =   useState<Todo[]>([])
 
  const addTextHandler = (addTodos : string) => {
    const newTodos = new Todo(addTodos)
    setTodos((prevState) => {
      return prevState.concat(newTodos)
    })
  }
  const removeTodoHandler = (id :string) => {
    setTodos((prevState) => {
return  prevState.filter(todo => todo.id !==id)
    })
  }
    const context : todoContextObj = {
        item: todos,
        addTodo: addTextHandler,
        removeTodo : removeTodoHandler
}
    return  <TodosContext.Provider  value={context}>{props.children}</TodosContext.Provider>
}


export  default  TodosContextProvider