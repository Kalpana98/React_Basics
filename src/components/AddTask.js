import React, { useState } from 'react'

const AddTask = () => {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState({name : '', Status : false});

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodoList([...todoList, newTask])    
        setNewTask({name : '', Status : false})
    }

    const handleMarkDone = (idx) => {
        const updatedTodoList = [...todoList]
        updatedTodoList[idx].Status = true;
        setTodoList(updatedTodoList)
    }

    const handleDeleteTask = (idxToDelete) => {
        const updatedTodoList = todoList.filter((item, idx) => {return (idx !== idxToDelete)})
        setTodoList(updatedTodoList)
    }

  return (
    <div>
        List
        <ul>
            {todoList.map((item, i) => {
               return (
                    <li key={i}>
                        <div>
                            Task : {item.name} Status : {item.Status ? "Task Completed" : "Not Done"}
                            <button onClick={() => handleMarkDone(i)}>Mark Done</button>
                            <button onClick={() => handleDeleteTask(i)}>Delete Task</button>
                        </div>
                    </li> 
               )
            })}
        </ul>
        <form onSubmit = {handleSubmit}>
            <input type='text' value={newTask.name} onChange={(e) => {setNewTask({name : e.target.value, Status : false})}}></input>
            <button type='submit'>Add Task</button>
        </form>
    </div>
  )
}

export default AddTask