import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ViewStudentsDetails = ({setStudentDetails}) => {

  const { address, email, startDate, endDate, fName, lName, phoneNum, trainingStatus } = useSelector((state) => state.students.singleStudent)
  console.log(address, email, startDate, endDate, fName, lName, phoneNum, trainingStatus)
  const date = new Date(startDate)
  console.log(date.toDateString())

  return (
  <div className='singleStudentComponent'>
      <div className='addStudentModal'>
        <i className="fa-solid fa-xmark fa-xl" onClick={() => setStudentDetails(false)} id="viewstudentModalClose"></i>
        <div className='viewStudentsDetails'>
          <div className="detailsGroup">
              <i className="fa-solid fa-user"></i>
              <p>{fName}</p>
          </div>

          <div className="detailsGroup">
              <i className="fa-solid fa-user"></i>
              <p>{lName}</p>
          </div>

          <div className="detailsGroup">
                <i class="fa-brands fa-github"></i>
                <a href='https://github.com' target="_blank">github</a>
          </div>

          <div className="detailsGroup">
              <i className="fa-solid fa-phone"></i>
              <p>{phoneNum}</p>
          </div>

          <div className="detailsGroup">
              <i className="fa-solid fa-home"></i>
              <p>{address}</p>
          </div>

          <div className="detailsGroup">
              <i className="fa-solid fa-envelope"></i>
              <p>{email}</p>
          </div>

          <div className="detailsGroup">
              <i className="fa-solid fa-clock"></i>
              <p>{trainingStatus}</p>
          </div>

          <div className="detailsGroup">
              <i className="fa-solid fa-calendar"></i>
              <p>Start Date: {new Date(startDate).toDateString()}</p>
          </div>

          <div className="detailsGroup">
              <i className="fa-solid fa-calendar"></i>
              <p>End Date: {new Date(endDate).toDateString()}</p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default ViewStudentsDetails