import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Admin.scss'

const Admin = () => {

 const [strength, setStrength] = useState(0)
 const handleClick=() => {
    axios.get("http://localhost:1902/inSchool").then(res => {
        setStrength(res.data.noOfStudents)
        
    }).catch(err => {
        console.log(err.message)
    })
 }
 console.log(strength)
  return (
    <div className='app__SA' >
        <div className='app__wrapper' style={{width:'100%'}} >
            <div className='app__flex app__SA'>
                <h2>Admin Page</h2>
                <button onClick={handleClick} className='button' style={{marginTop:'20px',marginBottom:'20px'}} >Student Strength</button>
            </div>
            <div>
                <h2>
                    No. of students in school right now: <span>  </span>
                    <span>
                        {
                            strength===0?(' '):strength
                        }
                    </span>
                </h2>
            </div>
            <div>
                <Link to="/checkOut"><button className='button'>Check Out</button></Link>
                <Link to="/" ><button className='button'>Check In</button></Link>
                <Link to='/registerStudent'><button className='button'>Student Registration</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Admin