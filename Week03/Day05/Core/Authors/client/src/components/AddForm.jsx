import React, {  useState } from 'react';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const AddForm = (props) => {
  const [author, setAuthor] = useState('')
  const [errors, setErrors] = useState([]); 
  const nav = useNavigate()

  const hundleForm = (e) =>{
    e.preventDefault()
    axios.post("http://localhost:8000/api/authors", {name:author})
    .then((response)=>{
        console.log(response.data);
        nav("/")
    })
    .catch((err)=>{
        const errorResponse = err.response.data.error.errors; // Get the errors from err.response.data
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                errorArr.push(errorResponse[key].message)
        }
        // Set Errors
        setErrors([...errorArr]);
    })

}
  return (
    <div>
      <Link to='/'>
        <div className="d-flex justify-content-end">
          <Button variant="outlined" color='primary' >Home</Button>
        </div>
      </Link>
      <Typography variant='h4' align='left' color={'#A010F0'} >Adding new author</Typography>
      <center>
        {errors.map((error, i)=><p className='alert alert-danger col-6' key={i}>{error}</p>)}
      <form className='col-8' onSubmit={hundleForm}>
        <div className="form-control">
          <label>Name : </label>
          <input onChange={(e)=>{setAuthor(e.target.value)}}  className="form-control" value={author}/>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
        <Link to='/'>
          <button className="btn btn-success">Cancel</button>
        </Link>
      </center>
    </div>
  )
}

export default AddForm