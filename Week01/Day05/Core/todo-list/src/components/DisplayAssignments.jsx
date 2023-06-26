import React, {useState} from 'react'

const DisplayAssignments = (props) => {

    const setNewState = (index) =>{
        let updatedTask = props.tasks.map((task, i)=>{
            if (index === i) {
                task.done = !task.done                
            }
            return task;
        })
        props.setTasks(updatedTask)

    }

    const deleteTask = (e, index) =>{
        e.preventDefault()
        const filtredTasks = props.tasks.filter((_task, i)=>{
            return i !== index
        })
        props.setTasks(filtredTasks)
    }

  return (
    <div className='d-flex justify-content-around p-4'>
        {props.task.done ? <s><h2 className='m-2'>{props.task.title}</h2></s> : <h2 className='m-2'>{props.task.title}</h2>}
        <form onSubmit={(e)=>{deleteTask(e, props.index)}}>
            <input onChange={(e)=>{setNewState(props.index)}} type="checkbox" className='m-2' checked={props.task.done}/>
            <button className="btn btn-dark m-2">Delete</button>
        </form>
        <hr />
    </div>
  )
}

export default DisplayAssignments