import React, { useState } from 'react'

const AddAssignment = (props) => {

    const [newTaskTitle, setNewTaskTitle] = useState("")
    
    const hundleForm = (e) => {
        e.preventDefault()
        if (newTaskTitle.length === 0) {
            return alert('Name the task you will add!!')            
        }
        const newTask = {
            title : newTaskTitle,
            done : false
        }
        props.setTasks([...props.tasks, newTask])
        setNewTaskTitle("")
    }
  return (
    <div>
        <form className="form container  col-6 p-4" onSubmit={(e)=>{hundleForm(e)}}>
            <input className="form-control" onChange={(e)=>{setNewTaskTitle(e.target.value)}} value={newTaskTitle}/>
            <button className="btn btn-primary">Add</button>
        </form>
    </div>
  )
}

export default AddAssignment