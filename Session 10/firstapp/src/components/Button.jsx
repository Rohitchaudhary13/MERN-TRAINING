import React from 'react'

const Button = (props) => {
  return (
    <div>
        <div>
            <button className='btn'>{props.value}</button>
        </div>
    </div>
  )
}

export default Button