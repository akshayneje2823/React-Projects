import react from 'react'

const Todo = ({text,todos,todo,setTodos}) => {
    const deleteHandler = () => {
        setTodos(todos.filter(elem =>elem.id !== todo.id ))
    }
    return(
        <div className="todo">
            <li className='todo-item'>{text}</li>
            <button className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <button onClick={deleteHandler} className='tarsh-btn'>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default Todo