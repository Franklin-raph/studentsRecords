import React,{ useState } from 'react'
import AddStudentComponent from './AddStudentComponent'
import Options from './Options';
import dotenv from 'dotenv'
// dotenv.config()

const AdminPasscomponent = ({ setAdminPassComponentModal, tableComp, leftNav }) => {
    const [passCode, setPassCode] = useState("")
    const [error, setError] = useState("")
    const [showAddStudentComponent, setShowAddStudentComponent] = useState(false)
    const [openToggleOptions, setOpenToggleOptions] = useState(false)

    function handlePassCode(){ 
        if(!passCode){
            setError("Please Enter the passcode!")
            setTimeout(() => {
                setError("")
            },3500)
        }else if(passCode !== "hello"){
            setError("Passcode is incorrect")
            setTimeout(() => {
                setError("")
            },3500)
        }else{
            console.log("Table", tableComp)
            console.log("Left nav", leftNav)
            if(tableComp === true){
                setOpenToggleOptions(true)
                return
            }
            if(leftNav === true){
                setShowAddStudentComponent(true)
                // console.log(process.env.REACT_APP_ADMIN_PASS)
                return

            }
        }
    }

    function closeNavs(){
        setAdminPassComponentModal(false)
    }

  return (
    <>
        <div className="modalWrapper">
            <div className='adminPassModal'>
                <i className="fa-solid fa-xmark fa-xl" onClick={() => closeNavs()} id="modalClose"></i>
                {error && <p style={{textAlign:'center', color:'red', fontWeight:'500'}}>{error}</p> }
                <div style={{display:'grid', gap:'30px', placeItems:'center',}}>
                    <i className="fa-solid fa-key fa-xl" style={{fontSize:'50px', color:'#757575'}}></i>
                    <input type="password" id="" value={passCode} onChange={(e) => setPassCode(e.target.value)} placeholder="******"/>
                </div>
                <button className='submitBtn' onClick={handlePassCode}>Submit</button>
            </div>
        </div>
        {
            showAddStudentComponent && <AddStudentComponent setShowAddStudentComponent={setShowAddStudentComponent} 
            setAdminPassComponentModal={setAdminPassComponentModal}/>
        }

        {
            openToggleOptions && <Options setOpenToggleOptions={setOpenToggleOptions}/>
        }
    </>
  )
}

export default AdminPasscomponent