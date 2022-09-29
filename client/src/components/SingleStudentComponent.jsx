import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateStudentAsync } from '../features/studentSlice'

const SingleStudentComponent = ({ setOpenSingleStudentComponent }) => {

    const dispatch = useDispatch()
    const { singleStudent } = useSelector((state) => state.students)
    const studentId = singleStudent._id

    const [fName, setFName] = useState(singleStudent.fName)
    const [lName, setLName] = useState(singleStudent.lName)
    const [email, setEmail] = useState(singleStudent.email)
    const [phoneNum, setPhoneNum] = useState(singleStudent.phoneNum)
    const [address, setAddress] = useState(singleStudent.address)
    const [error, setError] = useState("")

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
            <div style={{display:'grid', placeItems:'center',}}>
                <div className="formGroup">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" id="" value={fName} onChange={(e) => setFName(e.target.value)} placeholder="First Name" />
                </div>
                <div className="formGroup">
                    <i className="fa-solid fa-user"></i>
                    <input type="text" id="" value={lName} onChange={(e) => setLName(e.target.value)} placeholder="Last Name" />
                </div>
                <div className="formGroup">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="email" id="" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="example@gmail.com" />
                </div>
                <div className="formGroup">
                    <i className="fa-solid fa-phone"></i>
                    <input type="number" id="" value={phoneNum} onChange={(e) => setPhoneNum(e.target.value)} placeholder="080-000-000-000"/>
                </div>
                <div className="formGroup">
                    <i className="fa-solid fa-home"></i>
                    <input type="text" id="" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Ikeja, Lagos Nigeria" />
                </div>
            </div>
            <input type="submit" className='addStudentSubmitBtn' value="Update"/>
        </form>
    </div>
  )
}

export default SingleStudentComponent