import React,{ useState } from 'react'
import Leftnav from './Leftnav';

const TopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
        {!isOpen ? null
          :<Leftnav />
        }
        <div className="navbar">
            <h3>Technobs Digital Solutions</h3>
            <div className="search">
              <i className="fa-solid fa-search"></i><input type="search" placeholder='Search...' id="" />
            </div>
            {isOpen ? <i className="fa-solid fa-xmark fa-xl" onClick={() => setIsOpen(!isOpen)}></i>
              :
              <i className="fa-solid fa-bars fa-xl" onClick={() => setIsOpen(!isOpen)} id="navClose"></i>
            }
        </div>
    </>
  )
}

export default TopNav