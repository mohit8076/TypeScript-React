import React, {Fragment ,useState} from 'react';
import './App.css';

type FormElem = React.FormEvent<HTMLFormElement>
interface ITodo{
  text: string
  complete : boolean
}

function App() {
 const [value, setValue] = useState<string>('')
 
 const [todos, setTodos] = useState<ITodo[]>([])
 const handleSubmit = (e: FormElem ) : void => {
   e.preventDefault()
   addTodo(value)
    setValue('')
 }

 const addTodo = (text : string) : void => {
   const newTodos : ITodo[] = [...todos,{text,complete:false}]
   setTodos(newTodos)
 }
 
 const completeTodo = (index : number) : void => {
   const newTodos: ITodo[] = [...todos]
   newTodos[index].complete = !newTodos[index].complete
   setTodos(newTodos)
 }

 const removeTodos = (index : number) : void => {
  const newTodos: ITodo[] = [...todos]
  newTodos.splice(index , 1)
  setTodos(newTodos)
 }
  return (
    <Fragment>
      <h1>Todo List</h1>
      <form onSubmit = {handleSubmit}>
        <input type='text' value ={value} onChange = {e => setValue(e.target.value)}required/>
        <button type='submit'>Add Todo</button>
      </form>
      <section>
        {todos.map((todo: ITodo,index : number) =>
        <Fragment key ={index}>
         <div style={{textDecoration : todo.complete ? 'line-through' : ''}}>{todo.text}</div>
         <button type='button' onClick={() => completeTodo(index)}>{todo.complete ? 'Incomplete' : 'complete'}{' '}</button>
         <button type='button' onClick={() => removeTodos(index)}>&times;</button>
         </Fragment>
        )}
      </section>
    </Fragment>
  );
}

export default App;
