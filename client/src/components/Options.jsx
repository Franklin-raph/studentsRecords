import React, { useState } from 'react'
import SingleStudentComponent from './SingleStudentComponent';
import { deleteStudentAsync } from '../features/studentSlice';
import { useDispatch, useSelector } from 'react-redux';

const Options = ({ setOpenToggleOptions }) => {
  const dispatch = useDispatch()
  const { singleStudent } = useSelector((state) => state.students)

  const handleDelete = () => {
    dispatch(deleteStudentAsync(singleStudent._id))
    setOpenToggleOptions(false)
  }

  const [openSingleStudentComponent, setOpenSingleStudentComponent] = useState(false)
  return (
    <div className='optionsComponent'>
        <div className='optionsComponentModal'>
            <i className="fa-solid fa-xmark fa-xl" id="modalClose" onClick={() => setOpenToggleOptions(false)}></i>
            <div style={{display:'flex', marginTop:'3rem', justifyContent:'center', alignItems:'center', gap:'30px', placeItems:'center',}}>
                <p className="edit" style={{fontSize:'20px'}} onClick={() =>setOpenSingleStudentComponent(true)}>Edit</p>
                <p className="delete" style={{fontSize:'20px'}} onClick={() => handleDelete()}>Delete</p>
            </div>
        </div>
        {openSingleStudentComponent && <SingleStudentComponent setOpenSingleStudentComponent={setOpenSingleStudentComponent}/>}
    </div>
  )
}

export default Options