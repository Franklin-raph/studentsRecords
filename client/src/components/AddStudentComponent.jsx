import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addStudentAsync } from '../features/studentSlice'


const AddStudentComponent = ({ setShowAddStudentComponent, setAdminPassComponentModal, setIsLeftNavOpen }) => {

    const dispatch = useDispatch()

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNum, setPhoneNum] = useState("")
    const [address, setAddress] = useState("")
    const [error, setError] = useState("")
    const [startDate, setStartDate] = useState()

    function handleModalClose(){
        setShowAddStudentComponent(false)
        setAdminPassComponentModal(false)
        // setIsLeftNavOpen(false)
    }

    function handleStudentFormSubmit(e){
        e.preventDefault()
        if(!fName || !email || !phoneNum || !address || !lName || !startDate){
            setError("Please Fill in all fields")
            setTimeout(() => {
                setError("")
            },3500)
        }else{
            dispatch(addStudentAsync({fName, email, phoneNum, address, lName, startDate}))
            handleModalClose()
        }
    }

  return (
    <div>
        <div className="modalWrapper">
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
                    <div className="formGroup">
                        <i className="fa-solid fa-calendar"></i>
                        <input type="date" id="" value={startDate} onChange={(e) => setStartDate(e.target.value)} placeholder="Starting Date" />
                    </div>
                </div>
                <input type="submit" className='addStudentSubmitBtn' value="Submit"/>
            </form>
        </div>
    </div>
  )
}

export default AddStudentComponent