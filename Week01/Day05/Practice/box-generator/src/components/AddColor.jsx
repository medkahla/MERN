import React, { useState } from 'react'

function AddColor(props) {
    const [color, setColor] = useState("#ffffff")

    const addOneColor = (e) => {
        e.preventDefault()
        props.setColors([...props.colors, color])
        setColor("#ffffff")
    }

    return (
    <div>
        <form onSubmit={(e)=>{addOneColor(e)}}>
            <input type='color' onChange={(e)=>{setColor(e.target.value); console.log(e.target.value)}} value={color} />
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddColor