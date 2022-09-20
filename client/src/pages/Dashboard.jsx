import React, { useState } from 'react'
import StudentTableComponent from '../components/StudentTableComponent'
import { useSelector } from 'react-redux'

const Dashboard = () => {

  const students = useSelector(state => state.students.value)
  
    
  return (
    <div>
        <StudentTableComponent students={students}/>
    </div>
  )
}

export default Dashboard