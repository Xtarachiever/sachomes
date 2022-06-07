import React from 'react'
import './login.css';

function TextError(props) {
  return (
    <div className='errors'>
        {props.children}
    </div>
  )
}

export default TextError