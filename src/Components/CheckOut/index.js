import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './style.scss'

const CheckOut = () => {
    const [checkOutTime, setCheckOutTime] = useState('')
    const [rollNo, setRollNo] = useState('')
    const [updated, setUpdated] = useState(false)
    const handleSubmit=(e) => {
        e.preventDefault()
        axios.put("http://localhost:1902/checkOut",{rollNo,checkOutTime}).then((res) => {
            console.log(res)
            setUpdated(true)
        }).catch(err => {
            console.log(err.message)
        })
    }
  return (
    <div className='app__SA' >
        <div className='app__wrapper' style={{width:'100%'}} >
            <div>
                <h3 style={{marginLeft:'125px'}} >STUDENT CHECKOUT</h3>
            </div>
            
            <div>
                <form onSubmit={handleSubmit} className='app__flex app__SA' >
                    <input placeholder='time' name='checkOutTime' type='text' 
                        onChange={(e) => setCheckOutTime(e.target.value)} className='ip' />
                    <input placeholder='rollno' name='roll no' type='text' 
                        onChange={(e) => setRollNo(e.target.value)} className='ip'  />
                    <button type='submit' className='button' style={{marginBottom:'25px'}} >Check Out</button>
                </form>
            </div>
            <div>
                <Link to="/"><button className='button' >Check In</button></Link>
                <Link to="/admin" ><button className='button'>Admin</button></Link>
                <Link to='/registerStudent'><button className='button'>Student Registration</button></Link>
            </div>
            <div>
                {
                    !updated?(' '):(<h3 style={{marginLeft:'170px',marginTop:'60px'}} >UPDATED</h3>)
                }
            </div>
        </div>
        
    </div>
  )
}

export default CheckOut