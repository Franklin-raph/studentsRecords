import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addStudent} from '../features/studentSlice';


const AddStudentComponent = ({ setShowAddStudentComponent, setAdminPassModal }) => {

    const dispatch = useDispatch()
    const students = useSelector(state => state.students.value)

    const [fName, setFName] = useState("")
    const [lName, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [error, setError] = useState("")

    function handleModalClose(){
        setShowAddStudentComponent(false)
        setAdminPassModal(false)
    }

    function handleStudentFormSubmit(e){
        e.preventDefault()
        if(!fName || !email || !phoneNumber || !address || !lName){
            setError("Please Fill in all fields")
            setTimeout(() => {
                setError("")
            },3500)
        }else{
            dispatch(addStudent({id: Number(students.length) + 1, fName, email, phoneNumber, address, lName}))
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
                        <input type="number" id="" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="080-000-000-000"/>
                    </div>
                    <div className="formGroup">
                        <i className="fa-solid fa-home"></i>
                        <input type="text" id="" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Ikeja, Lagos Nigeria" />
                    </div>
                </div>
                <input type="submit" className='addStudentSubmitBtn' value="Submit"/>
            </form>
        </div>
    </div>
  )
}

export default AddStudentComponent