import React from 'react'
import Navbar from '../../NavBar/Navbar'
import SideNavBar from '../../NavBar/SideNavBar'
import './NewHouses.css'
import file_Icon from '../../../../images/Mask.svg'
import Button from '../../ReusableButton/Button'
import { Link } from 'react-router-dom'
function NewHouses() {
  return (
    <div>
        <Navbar name='Dashboard'/>
        <div className='add_house'>
            <SideNavBar className="sidebar"/>
            <div className='house_details'>
                <Link to="/dashboard" className='title'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <p>Add New Houses</p>
                </Link>
                <div className='add_houses place-items-center w-full'>
                    <label>
                        <input placeholder='' type='text' className='input' required/>
                        <span>Location</span>
                    </label>
                    <div>
                        <select className='select' defaultValue="select state">
                            <option disabled value="select state" className='default'>Select state</option>
                            <option value="oyo">Oyo</option>
                        </select>
                    </div>
                    <label>
                        <input placeholder='' type='text' className='input' required/>
                        <span>Amount (per year)</span>
                    </label>
                    <div>
                        <select className='select' defaultValue="Status">
                            <option disabled value="Status" className='default'>Status</option>
                            <option value="oyo">Oyo</option>
                        </select>
                    </div>
                    <label>
                        <textarea placeholder='' rows={4} type='text' className='input' required></textarea>
                        <span>Description</span>
                    </label>
                    <label>
                        <textarea placeholder='' rows={4} type='text' className='input' required></textarea>
                        <span>Full Address</span>
                    </label>
                    <label htmlFor='file' className='file'>
                        <img src={file_Icon} alt="upload"/>
                        Upload Images
                        <input type="file" id='file' required/>
                    </label>
                    <div>
                        <select className='select' defaultValue="Status">
                            <option disabled value="Status" className='default'>Added By</option>
                            <option value="oyo">Oyo</option>
                        </select>
                    </div>
                </div>
                <Button name="Add House" className="button"/>
            </div>
       </div>
    </div>
  )
}

export default NewHouses