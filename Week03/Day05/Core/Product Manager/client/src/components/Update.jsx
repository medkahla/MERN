import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios"

const Update = () => {
    const nav = useNavigate()
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState("")
    const [description, setDescription] = useState("")
    const {id} = useParams()
    
    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then((response)=>{
            console.log(response.data);
            setTitle(response.data.Product.title)
            setPrice(response.data.Product.price)
            setDescription(response.data.Product.description)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[id])
        
    const hundleForm = (e) =>{
        e.preventDefault()
        const updatedProduct = {
            title, 
            price, 
            description
        }
        axios.put("http://localhost:8000/api/products/"+id, updatedProduct)
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
        <h2>Updating Product</h2>
        <form onSubmit={hundleForm}>
            <div>
                <label className="form-label">Title</label>
                <input className="form-control" onChange={(e)=>{setTitle(e.target.value)}} value={title}/>
            </div>
            <div>
                <label className="form-label">Price</label>
                <input className="form-control"  type='float' onChange={(e)=>{setPrice(e.target.value)}} value={price}/>
            </div>
            <div>
                <label className="form-label">Description</label>
                <textarea className="form-control" name="" id="" cols="20" rows="10" onChange={(e)=>{setDescription(e.target.value)}} value={description}></textarea>
            </div>
            <button className='btn btn-primary'>Update</button>
        </form>
    </div>
  )
}

export default Update