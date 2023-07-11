import React, { useEffect , useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material'
import {Typography} from '@mui/material'

const UpdateForm = () => {
    const [author, setAuthor] = useState('')
    const {id} = useParams()
    const nav = useNavigate
    const [errors, setErrors] = useState([]); 
    useEffect(()=>{
      axios.get("http://localhost:8000/api/authors/"+id)
      .then((response)=>{
        // console.log(response.data.Author.name)
        setAuthor(response.data.Author.name)
    })
      .catch((err)=>{
        console.log("❌❌❌ Something Went Wrong", err);
    })
    },[id])
    
    const hundleForm = (e)=>{
        e.preventDefault()
        axios.put("http://localhost:8000/api/authors/"+id, {name: author})
        .then((res)=>{
            console.log(res.data);
            nav('/')
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
            const errorResponse = err.response.data.errors; // Get the errors from err.response.data
            const errorArr = []; // Define a temp error array to push the messages in
            for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
            }
            // Set Errors
            setErrors(errorArr);
        })
    }


  return (
    <div>
        <Link to='/'>
        <div className="d-flex justify-content-end">
          <Button variant="outlined" color='primary' >Home</Button>
        </div>
      </Link>
      <Typography variant='h4' align='left' color={'#A010F0'} >Editing this author</Typography>
      <center>
      <form className='col-8' onSubmit={hundleForm}>
        {errors.map((err, index) => <p className='alert alert-danger col-6' key={index}>{err}</p>)}
        <div className="form-control">
          <label>Name : </label>
          <input onChange={(e)=>{setAuthor(e.target.value)}}  className="form-control" value={author}/>
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
        <Link to='/'>
          <button className="btn btn-success">Cancel</button>
        </Link>
      </center>
    </div>
  )
}

export default UpdateForm