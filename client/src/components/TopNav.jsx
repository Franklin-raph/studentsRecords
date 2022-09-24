import React,{ useEffect, useState } from 'react'
import Leftnav from './Leftnav';

const TopNav = () => {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);

  return (
    <>
        {!isLeftNavOpen ? null
          :<Leftnav />
        }
        <div className="navbar">
            <h3>Technobs Digital Solutions</h3>
            <div className="search">
              <i className="fa-solid fa-search"></i><input type="search" placeholder='Search...' id="" />
            </div>
            {isLeftNavOpen ? <i className="fa-solid fa-xmark fa-xl" onClick={() => setIsLeftNavOpen(!isLeftNavOpen)}></i>
              :
              <i className="fa-solid fa-bars fa-xl" onClick={() => setIsLeftNavOpen(!isLeftNavOpen)} id="navClose"></i>
            }
        </div>
    </>
  )
}

export default TopNav