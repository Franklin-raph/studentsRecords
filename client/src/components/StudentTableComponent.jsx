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

  const completedState = {
    height: "22px",
    width: "22px",
    margin: "0 auto",
    backgroundColor: "#cf0034",
    borderRadius: "50%",
    textAlign:"center",
    color:"#fff",
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    padding:"10px"
  };

//   address
// : 
// "Amawbia, Anambra state"
// createdAt
// : 
// "2022-10-04T10:35:08.503Z"
// email
// : 
// "uebuka15@gmail.com"
// fName
// : 
// "Uchechukwu"
// lName
// : 
// "Chukwuebuka"
// phoneNum
// : 
// "08133822952"


// address
// : 
// "BEHIND EKE AFOR MARKET, NISE AWKA SOUTH"
// createdAt
// : 
// "2022-10-04T10:19:49.829Z"
// email
// : 
// "anyaebuka@gmail.com"
// fName
// : 
// "FESTUS"
// lName
// : 
// "CHESIKE"
// phoneNum
// : 
// "07031944427"

  const activeState = {
    height: "22px",
    width: "22px",
    margin: "0 auto",
    backgroundColor: "#00cf5d",
    borderRadius: "50%",
    textAlign:"center",
    color:"#fff",
    display: "flex",
    alignItems: "center",
    justifyContent:"center",
    padding: "10px"
  };

  return (
    <>
      {!adminPassComponentModal ? null
      :<AdminPasscomponent 
      setAdminPassComponentModal={setAdminPassComponentModal} 
      tableComp={true}/>
    }
      <div className='dashBoard'>
        <div className="search">
          <i className="fa-solid fa-search"></i><input type="search" 
          placeholder='Search for a student using first or last name...' 
          id="" onChange={(e) => setQuerySearch(e.target.value.toLocaleLowerCase())} />
        </div>
        <div className="container mt-5 table-responsive bg-glass shadow-4-strong 
        rounded-6 px-0 tableContainer">
          <table className="table text-dark table-border table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Gender</th>
                <th scope='col'>Training Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allStudents && allStudents
              .filter(student => student.fName
              .toLowerCase().includes(querySearch) || student.lName
              .toLowerCase().includes(querySearch))
              .map(student =>{
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
                  <p>Male</p>
                </td>
                <td className='trainingStatus'>
                  {/* {console.log(student.trainingStatus.charAt(0))} */}
                  <p style={student.trainingStatus === "Completed" ? 
                    completedState : activeState}>
                    {student.trainingStatus.charAt(0)}
                  </p>
                </td>
                <td style={{textAlign:'center', color:'#630470'}}>
                  <i className="fa-solid fa-sliders" 
                  style={{fontSize:'20px', cursor:'pointer'}} 
                  onClick={() => toggleAction(student._id)}></i>
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