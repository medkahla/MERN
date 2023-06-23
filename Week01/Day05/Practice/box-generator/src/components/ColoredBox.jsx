import React from 'react'

function ColoredBox(props) {
  return (
      <div className='colored' style={{backgroundColor: props.color}}>
        {props.color}
    </div>
  )
}

export default ColoredBox