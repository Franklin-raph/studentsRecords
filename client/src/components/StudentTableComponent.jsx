import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getAStudentAsync } from '../features/studentSlice';
import Options from './Options';
import AdminPasscomponent from '../components/AdminPasscomponent'

const StudentTableComponent = ({ allStudents }) => {

  const dispatch = useDispatch()
  
  const [querySearch, setQuerySearch] = useState("")
  const [adminPassComponentModal, setAdminPassComponentModal] = useState(false);

  const toggleAction = (id) => {
    dispatch(getAStudentAsync(id))
    setAdminPassComponentModal(true)
    // setOpenToggleOptions(true)
  }

  return (
    <>
      {!adminPassComponentModal ? null
      :<AdminPasscomponent setAdminPassComponentModal={setAdminPassComponentModal} tableComp={true}/>
    }
      <div className='dashBoard'>
        <div className="search">
          <i className="fa-solid fa-search"></i><input type="search" placeholder='Search for a student using first or last name...' id="" onChange={(e) => setQuerySearch(e.target.value.toLocaleLowerCase())} />
        </div>
        <div className="container mt-5 table-responsive bg-glass shadow-4-strong rounded-6 px-0 tableContainer">
          <table className="table text-dark table-border table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Address</th>
                <th scope='col'>Training Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allStudents && allStudents.filter(student => student.fName.toLowerCase().includes(querySearch) || student.lName.toLowerCase().includes(querySearch)).map(student =>{
                return(
              <tr className="text-dark" key={student._id}>
                <td>
                  <div className="d-flex align-items-center">
                    <div className="ms-3 d-flex gap-3">
                      <p className="mb-1 names">{student.fName}</p>
                      <p className="mb-1 names">{student.lName}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <p className="text-muted">{student.email}</p>
                </td>
                <td>
                  <p>{student.phoneNum}</p>
                </td>
                <td className='studentAddress'>
                  {student.address}
                </td>
                <td className='trainingStatus'>
                  <p>{student.trainingStatus}</p>
                </td>
                <td style={{textAlign:'center', color:'#630470'}}>
                  <i className="fa-solid fa-sliders" style={{fontSize:'20px', cursor:'pointer'}} onClick={() => toggleAction(student._id)}></i>
                </td>
              </tr>
                )
              })}
            </tbody>
          </table>
        </div>
        
      </div>
    </>
  )
}

export default StudentTableComponent