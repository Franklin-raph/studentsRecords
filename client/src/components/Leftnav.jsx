import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import AdminPasscomponent from '../components/AdminPasscomponent'

const Leftnav = () => {

    const [adminPassModal, setAdminPassModal] = useState(false);

  return (
    <>
        {!adminPassModal ? null
          :<AdminPasscomponent setAdminPassModal={setAdminPassModal}/>
        }
        <div className="navWrapper">
            <div className='sideNav'>
                <img src="https://technobs.com/img/logo6.png" alt="" />
                <button to='/' className='active'>
                    <i className="fa-solid fa-gauge-high"></i>
                    <p>Dashboard</p>
                </button>
                <button onClick={() => setAdminPassModal(true)}>
                    <i className="fa-solid fa-user-plus"></i>
                    <p>Add Student</p>
                </button>
            </div>
        </div>
    </>
  )
}

export default Leftnav