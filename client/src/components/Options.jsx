import React, { useState } from 'react'
import SingleStudentComponent from './SingleStudentComponent';

const Options = ({ toggleOptions }) => {
  const [openSingleStudentComponent, setOpenSingleStudentComponent] = useState(false)
  return (
    <div className='optionsComponent'>
        <div className='optionsComponentModal'>
            <i className="fa-solid fa-xmark fa-xl" id="modalClose"></i>
            <div style={{display:'flex', marginTop:'3rem', justifyContent:'center', alignItems:'center', gap:'30px', placeItems:'center',}}>
                <p className="edit" style={{fontSize:'20px'}} onClick={() =>setOpenSingleStudentComponent(true)}>Edit</p>
                <p className="delete" style={{fontSize:'20px'}}>Delete</p>
            </div>
        </div>
        {openSingleStudentComponent && <SingleStudentComponent setOpenSingleStudentComponent={setOpenSingleStudentComponent}/>}
    </div>
  )
}

export default Options