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
            <div className="keys">
              <h6>Training Status</h6>
              <div>
                <span className="activeTrainingColor"></span>
                <span className="trainingText">Active</span>
              </div>

              <div>
                <span className="completedTrainingColor"></span>
                <span className="trainingText">Completed</span>
              </div>
            </div>
        </div>
    </>
  )
}

export default Leftnav



// let dateCalculation = new Date("2022-08-23");
// let numberOfDaysToAdd = 93;
// let result = dateCalculation.setDate(dateCalculation.getDate() + numberOfDaysToAdd);
// endDate = new Date(result);

// const remainingDays = (Math.abs(endDate - (new Date())))
// console.log(Math.floor(remainingDays / (24 * 60 * 60 * 1000)));