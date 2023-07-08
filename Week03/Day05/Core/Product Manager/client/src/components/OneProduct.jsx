import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const OneProduct = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams()

    useEffect(()=>{
        axios.get("http://localhost:8000/api/products/"+id)
        .then((res)=>{
            console.log(res.data);
            setProduct(res.data.Product)
        })
        .catch((err)=>{
            console.log("❌❌❌ Something Went Wrong", err);
        })
    },[])

  return (
    <div className='container'>
        <hr />
        <h2>{product.title}</h2>
        <h4>{product.price} $</h4>
        <h4>{product.description}</h4>
        <hr />
    </div>
  )
}

export default OneProduct