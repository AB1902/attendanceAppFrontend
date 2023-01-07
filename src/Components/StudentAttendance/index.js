import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './StudentAttendance.scss'

const StudentAttendance = () => {
    const [checkInTime, setCheckInTime] = useState('')
    const [rollNo, setRollNo] = useState('')
    const [updated, setUpdated] = useState(false)
    const handleSubmit=(e) => {
        e.preventDefault()
        axios.put("http://localhost:1902/checkIn",{rollNo,checkInTime}).then((res) => {
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
                <h3>STUDENT ATTENDANCE</h3>
            </div>
            <form onSubmit={handleSubmit} className='app__flex app__SA' >
                <input placeholder='time' name='checkInTime' type='text' 
                    onChange={(e) => setCheckInTime(e.target.value)} className='ip'   />
                <input placeholder='rollno' name='roll no' type='text' 
                    onChange={(e) => setRollNo(e.target.value)} className='ip' />
                <button type='submit' className='button' style={{marginTop:'15px'}} >PRESENT</button>
            </form>
            <div className='app__flex app__wrapper' >
                <Link to="/checkOut"><button className='button' >Check Out</button></Link>
                <Link to="/admin" ><button className='button'>Admin</button></Link>
                <Link to='/registerStudent'><button className='button'>Student Registration</button></Link>
            </div>
            <div>
                {
                    !updated?(' '):(<h3 style={{marginLeft:'205px'}} >UPDATED</h3>)
                }
            </div>

        </div>
    </div>
  )
}

export default StudentAttendance