import React from 'react'
import AllProducts from './AllProducts';
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
        <div className='container'>
        <div className='d-flex justify-content-end'>
            <Link to="/product/new">
                <button className="btn btn-outline-primary">Add product</button>
            </Link>
        </div>
        <AllProducts />
      </div>
    </div>
  )
}

export default Main