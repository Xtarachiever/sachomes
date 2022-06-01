import React from 'react';
import './Button.css'

function Button(props) {
  return (
    <div className='reuseable'>
        <button type='button' className={props.className}>{props.name}</button>
    </div>
  )
}

export default Button