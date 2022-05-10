import React from 'react'
import Todo from './Todo'

function TodoList({todos,setTodos}) {
        console.log(todos)
  return (
    <div>
      <div className="todo-container">
          <ul className='todo-list'>
              {todos.map((todo) =>(
                  <Todo key={todo.id}
                   text={todo.text} 
                   setTodos={setTodos} 
                   todos={todos} 
                   />
              ))}
          </ul>
      </div>
    </div>
  )
}

export default TodoList