import React from 'react';
import './Navbar.css'

function Navbar(props) {
  return (
    <div className='navbar flex flex-row justify-between px-10 
    items-center shadow-xl p-3 mb-5'>
        <h4>{props.name}</h4>
        <h5 className='flex flex-col items-end'>Admin Person <span>test@example.com</span></h5>
    </div>
  )
}

export default Navbar