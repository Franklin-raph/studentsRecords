import React, { useState } from 'react'

const AddStudentComponent = ({ setShowAddStudentComponent, setAdminPassModal }) => {

    const [addStudentModal, setAddStudentModal] = useState(false);
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [error, setError] = useState("")

    function handleModalClose(){
        setShowAddStudentComponent(false)
        setAdminPassModal(false)
    }
  return (
    <div>
        <div className="modalWrapper">
            <div className='addStudentModal'>
                <i className="fa-solid fa-xmark fa-xl" onClick={() => handleModalClose()} id="modalClose"></i>
                {error && <p style={{textAlign:'center', color:'red', fontWeight:'500'}}>{error}</p> }
                <div style={{display:'grid', placeItems:'center',}}>
                    <div className="formGroup">
                        <i className="fa-solid fa-user"></i>
                        <input type="text" id="" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
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
                <input type="submit" className='submitBtn' value="Submit"/>
            </div>
        </div>
    </div>
  )
}

export default AddStudentComponent