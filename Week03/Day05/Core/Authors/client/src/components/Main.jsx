import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {
  const [authors, setAuthors] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8000/api/authors")
    .then((res)=>{
        console.log(res.data);
        setAuthors(res.data)
    })
    .catch((err)=>{
        console.log("❌❌❌ Something Went Wrong", err);
    })
    },[])

    const deleteOneAuthor = (id) => {
      setAuthors(authors.filter(author => author._id !== id));
      axios.delete("http://localhost:8000/api/authors/"+id)
      .then((res)=>{
        // console.log(res.data);
        alert("Deleting Success")
      })
      .catch((err)=>{
          console.log("❌❌❌ Something Went Wrong", err);
      })
    }
  
  return (
    <div>
      <Link to='/new'>
        <div className="d-flex justify-content-end">
          <Button variant="outlined" startIcon={<AddIcon />}>Add Authors</Button>
        </div>
      </Link>
      <Typography variant='h4' align='left' color={'#A010F0'} >We have quotes by:</Typography>
      <div className="container">
      <table className='table'>
        <thead>
          <tr>
            <th>Authors</th>
            <th>Actions availables</th>
          </tr>
        </thead>
        <tbody>
        {authors.map((author)=>{
          return(
            <tr key={author._id}>
              <td>
                <Typography >{author.name}</Typography>
              </td>
              <td className='d-flex justify-content-around'>
                  <Link to={`/edit/${author._id}`}>
                    <Button variant="outlined" color="success"  startIcon={<EditIcon />}>Edit</Button>
                  </Link>
                  <Button variant="outlined" color="error"  startIcon={<DeleteIcon />} onClick={()=>deleteOneAuthor(author._id)}>Delete</Button>
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
      </div>
    </div>
  )
}

export default Main