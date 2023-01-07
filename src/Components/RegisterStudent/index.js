import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const RegisterStudent = () => {
  
  const [studentName, setStudentName] = useState('')
  const [rollNo, setRollNo] = useState('')  
  const [date, setDate] = useState('')  
  const [checkInTime, setCheckInTime] = useState('')  
  const [checkOutTime, setcheckOutTime] = useState('')  
  const [updated, setUpdated] = useState(false)  
 const handleSubmit=(e) => {
    e.preventDefault()
    axios.post("http://localhost:1902/",{studentName,rollNo,date,checkInTime,checkOutTime}).then(res => {
        console.log(res)
        setUpdated(true)
    }).catch(err => {
        console.log(err.message)
    })

 } 

  return (
    <div className='app__SA'>
        <div className='app__wrapper' style={{width:'100%'}}>
            <div>
                <h3 style={{marginRight:'20px'}}>RegisterStudent</h3>
            </div>
                <form onSubmit={handleSubmit} className='app__flex app__SA' >
                    <input name='studentName' type='text' placeholder='studentName' 
                        onChange={(e) => setStudentName(e.target.value)} className='ip' />
                    <input name='roll number' type='text' placeholder='enter roll number' 
                        onChange={(e) => setRollNo(e.target.value)}  className='ip'/>
                    <input name='date' type='text' placeholder='enter date' 
                        onChange={(e) => setDate(e.target.value)} className='ip' />
                    <input name='checkInTime' type='text' placeholder='checkInTime' 
                        onChange={(e) => setCheckInTime(e.target.value)} className='ip' />
                    <input name='checkOutTime' type='text' placeholder='checkOutTime(optional entry)' 
                        onChange={(e) => setcheckOutTime(e.target.value)} className='ip' />
                    <button type='submit' className='button'>Submit</button>
                </form>
            <div>
                {
                    !updated?(' '):(
                        <h3 style={{marginTop:'20px',margin:'auto',marginLeft:'70px'}} >
                            STUDENT ADDED TO THE DATABASE
                        </h3>
                    )
                }
            </div>
            <div className='app__flex app__wrapper'>
                <Link to="/checkOut"><button className='button'>Check Out</button></Link>
                <Link to="/" ><button className='button'>Check In</button></Link>
                <Link to='/admin'><button className='button'>Admin</button></Link>
            </div>
            
        </div>
    </div>
  )
}

export default RegisterStudent