import React, { useState } from 'react'
import StudentTableComponent from '../components/StudentTableComponent'
import { useSelector, useDispatch } from 'react-redux'
import { getStudentAsync } from '../features/studentSlice'
import { useEffect } from 'react'

const Dashboard = () => {

  const dispatch = useDispatch();

  const students = useSelector(state => state.students)

  useEffect(() => {
    dispatch(getStudentAsync())
  },[])
  
    
  return (
    <div style={{position:'relative', marginTop:'6rem'}}>
        <StudentTableComponent students={students}/>
    </div>
  )
}

export default Dashboard