

import NewTodo from './component/NewTodo';
import  Todo  from './component/Todo'
import  TodosContextProvider  from './store/todo-context';

function App() {

  return (
    <TodosContextProvider >
      <NewTodo  />
    <Todo  />
    </TodosContextProvider>
  );
}

export default App;
