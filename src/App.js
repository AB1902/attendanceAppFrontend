import React from 'react'
import StudentAttendance from './Components/StudentAttendance'
import {Link, Route} from 'react-router-dom'
import { Router } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import CheckOut from './Components/CheckOut'
import Admin from './Components/Admin'
import RegisterStudent from './Components/RegisterStudent'
import './App.scss'

const App = () => (
    <div className='app app__flex app__container' >
        <div>
            <h1>Attendance App</h1>
        </div>
        
        <div>
            <Routes>
                <Route path="/" element={<StudentAttendance />} />
                <Route path="/checkOut" element={<CheckOut />} />
                <Route path="/admin" element={<Admin /> } />
                <Route path='/registerStudent' element={<RegisterStudent />} />
            </Routes>
        </div>
    </div>
)

export default App