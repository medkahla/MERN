import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [resources, setResources] = useState([])
    const [selectedResource, setSelectedResource] = useState(null)
    const [resourceId, setResourceId] = useState(1)

    useEffect(()=>{
        axios.get("https://swapi.dev/api").then((response) => {
            setResources([...Object.getOwnPropertyNames(response.data)])
            })
        .catch((err)=>{console.log(err)})
    }, [])

    const nav = useNavigate()
    const redirection = (e) =>{
        e.preventDefault()
        nav(`/${selectedResource}/${resourceId}`)
        setSelectedResource(selectedResource)
    }
    

  return (
    <div className='container'>
        <fieldset>
            <legend>Search Form</legend>
            <form className='d-flex justify-content-between m-2 p-2' onSubmit={(e)=>redirection(e)}>
                <div className='form-group col-4'>
                <label><b>Search for:</b></label>
                <select onChange={(e)=>{setSelectedResource(e.target.value)}} className='form-control m-2'>
                    {resources.map((resource, i)=>{
                        return <option value={resource} key={i}>{resource}</option>
                    })}
                </select>
                </div>
                <div className='form-group col-2'>
                <label><b>ID:</b></label>
                <input type="number" className='form-control m-2' onChange={(e)=>{setResourceId(e.target.value)}}/>
                </div>
                <button className="btn btn-primary">Search</button>
            </form>
        </fieldset>
    </div>
  )
}

export default Form