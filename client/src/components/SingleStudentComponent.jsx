import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateStudentAsync } from '../features/studentSlice'
import ViewStudentsDetails from './ViewStudentsDetails'

const SingleStudentComponent = ({ setOpenSingleStudentComponent }) => {

    const dispatch = useDispatch()
    const { singleStudent } = useSelector((state) => state.students)
    const studentId = singleStudent._id

    const [fName, setFName] = useState(singleStudent.fName)
    const [lName, setLName] = useState(singleStudent.lName)
    const [email, setEmail] = useState(singleStudent.email)
    const [phoneNum, setPhoneNum] = useState(singleStudent.phoneNum)
    const [address, setAddress] = useState(singleStudent.address)
    const [startDate, setStartDate] = useState(singleStudent.startDate)
    const [error, setError] = useState("")
    const [studentDetails, setStudentDetails] = useState(false)

    function handleModalClose(){
        setOpenSingleStudentComponent(false)
    }

    function handleStudentFormSubmit(e){
        e.preventDefault()
        if(!fName || !email || !phoneNum || !address || !lName){
            setError("Please Fill in all fields")
            setTimeout(() => {
                setError("")
            },3500)
        }else{
            dispatch(updateStudentAsync({studentId, fName, email, phoneNum, address, lName}))
            handleModalClose()
        }
    }

  return (
    <div className='singleStudentComponent'>
        <form className='addStudentModal' onSubmit={handleStudentFormSubmit}>
            <i className="fa-solid fa-xmark fa-xl" onClick={() => handleModalClose()} id="modalClose"></i>
            {error && <p style={{textAlign:'center', color:'red', fontWeight:'500'}}>{error}</p> }
            {/* {startDate} */}
            <div style={{display:'grid', placeItems:'center',}}>
                <div className="formGroup">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" value={fName} onChange={(e) => setFName(e.target.value)} placeholder="First Name" />
                </div>
                <div className="formGroup">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" value={lName} onChange={(e) => setLName(e.target.value)} placeholder="Last Name" />
                </div>
                <div className="formGroup">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" />
                </div>
                <div className="formGroup">
                    <i className="fa-solid fa-phone"></i>
                    <input type="number" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} placeholder="080-000-000-000"/>
                </div>
                <div className="formGroup">
                    <i className="fa-solid fa-home"></i>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Ikeja, Lagos Nigeria" />
                </div>
                <div className="formGroup">
                    <i className="fa-solid fa-calendar"></i>
                    <input type="date" onChange={(e) => setStartDate(e.target.value)} placeholder="Starting Date" />
                </div>
            </div>
            <div className='viewAndUpdateButton'>
                <input type="button" value="View Details" onClick={() => setStudentDetails(!studentDetails)}/>
                <input type="submit" className='addStudentSubmitBtn' value="Update"/>
            </div>
        </form>
        {studentDetails && <ViewStudentsDetails setStudentDetails={setStudentDetails}/>}
    </div>
  )
}

export default SingleStudentComponent