import React, { useState } from 'react'
import StudentTableComponent from '../components/StudentTableComponent'
import { useSelector, useDispatch } from 'react-redux'
import { getAllStudentAsync } from '../features/studentSlice'
import { useEffect } from 'react'

const Dashboard = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStudentAsync())
  },[])

  const { allStudents } = useSelector((state) => state.students)
  // console.log(allStudents)

  
    
  return (
    <div style={{position:'relative', marginTop:'6rem'}}>
        {allStudents && <StudentTableComponent allStudents={allStudents}/> }
    </div>
  )
}

export default Dashboard