import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const AddForm = () => {
    const nav = useNavigate()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    
    const hundleForm = (e) =>{
        e.preventDefault()
        const product = {
            title, 
            price, 
            description
        }
        axios.post("http://localhost:8000/api/products", product)
        .then((response)=>{
            console.log(response.data);
            nav("/")
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })    
    }

  return (
    <div className='container'>
        <form onSubmit={hundleForm}>
            <div>
                <label className="form-label">Title</label>
                <input className="form-control" onChange={(e)=>{setTitle(e.target.value)}}/>
            </div>
            <div>
                <label className="form-label">Price</label>
                <input className="form-control"  type='float' onChange={(e)=>{setPrice(e.target.value)}} />
            </div>
            <div>
                <label className="form-label">Description</label>
                <textarea className="form-control" name="" id="" cols="20" rows="10" onChange={(e)=>{setDescription(e.target.value)}}></textarea>
            </div>
            <button className='btn btn-primary'>Add</button>
        </form>
    </div>
  )
}

export default AddForm