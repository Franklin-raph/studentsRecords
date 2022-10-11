import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminPasscomponent from '../components/AdminPasscomponent'

const Leftnav = ({ setIsLeftNavOpen }) => {

    const [adminPassComponentModal, setAdminPassComponentModal] = useState(false);

  return (
    <>
        {!adminPassComponentModal ? null
          :<AdminPasscomponent setAdminPassComponentModal={setAdminPassComponentModal} leftNav={true}/>
        }
        <div className="navWrapper">
            <div className='sideNav'>
                <img src="https://technobs.com/img/logo6.png" alt="" />
                <button onClick={() => setIsLeftNavOpen(false)} className='active'>
                    <i className="fa-solid fa-gauge-high"></i>
                    <p>Dashboard</p>
                </button>
                <button onClick={() => setAdminPassComponentModal(true)}>
                    <i className="fa-solid fa-user-plus"></i>
                    <p>Add Student</p>
                </button>
            </div>
        </div>
    </>
  )
}

export default Leftnav