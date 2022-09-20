import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent, updateStudent } from '../features/studentSlice';

const StudentTableComponent = ({ students }) => {

  const dispatch = useDispatch()
  // const students = useSelector(state => state.students.value)

  return (
    <div className="container mt-5 table-responsive bg-glass shadow-4-strong rounded-6 px-0">
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
            {students.map(student =>{
              return(
            <tr className="text-dark"  key={student.id}>
              <td>
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{student.fName}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-muted">{student.email}</p>
              </td>
              <td>
                <p>{student.phoneNumber}</p>
              </td>
              <td>
                {student.address}
              </td>
              <td>
                <button type="button" className="btn btn-outline-warning btn-sm btn-rounded">
                  Edit
                </button>
                <button onClick={() => dispatch(deleteStudent({id: student.id}))} type="button" className="btn btn-outline-danger btn-sm btn-rounded ms-2">
                  Delete
                </button>
              </td>
            </tr>
              )
            })}
            

            {/* <tr className="text-dark">
              <td>
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Kelly Justin</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-muted">kjusin79@mail.com</p>
              </td>
              <td>
                <p>080-000-000-00</p>
              </td>
              <td>
                junior
              </td>
              <td>
                <button type="button" className="btn btn-outline-warning btn-sm btn-rounded">
                  Edit
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm btn-rounded ms-2">
                  Delete
                </button>
              </td>
            </tr>
            <tr className="text-dark">
              <td>
                <div className="d-flex align-items-center">
                  <div className="ms-3">
                    <p className="fw-bold mb-1">Jessica Sans</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="text-muted">jessicasans@gmail.com</p>
              </td>
              <td>
                <p>080-000-000-00</p>
              </td>
              <td>
                Senior
              </td>
              <td>
                <button type="button" className="btn btn-outline-warning btn-sm btn-rounded">
                  Edit
                </button>
                <button type="button" className="btn btn-outline-danger btn-sm btn-rounded ms-2">
                  Delete
                </button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
  )
}

export default StudentTableComponent