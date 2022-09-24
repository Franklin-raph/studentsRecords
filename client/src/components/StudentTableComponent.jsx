import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudentAsync } from '../features/studentSlice';

const StudentTableComponent = ({ students }) => {

  const dispatch = useDispatch()

  return (
    <>
      <div className="container mt-5 table-responsive bg-glass shadow-4-strong rounded-6 px-0 tableContainer">
        <table className="table text-dark table-border table-hover">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Address</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students && students.map(student =>{
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
              <td>
                {student.address}
              </td>
              <td>
                {/* <button type="button" className="btn btn-outline-warning btn-sm btn-rounded">
                  Edit
                </button> */}
                <button onClick={() => dispatch(deleteStudentAsync(student._id))} type="button" className="btn btn-outline-danger btn-sm btn-rounded ms-2">
                  Delete
                </button>
              </td>
            </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default StudentTableComponent