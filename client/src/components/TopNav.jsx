import React,{ useEffect, useState } from 'react'
import Leftnav from './Leftnav';

const TopNav = () => {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);

  return (
    <>
        {!isLeftNavOpen ? null
          :<Leftnav setIsLeftNavOpen={setIsLeftNavOpen}/>
        }
        <div className="navbar">
            <h3 style={{fontSize:'16px'}}>Technobs Digital Solutions</h3>
            
            {isLeftNavOpen ? <i className="fa-solid fa-xmark fa-xl" onClick={() => setIsLeftNavOpen(!isLeftNavOpen)}></i>
              :
              <i className="fa-solid fa-bars fa-xl" onClick={() => setIsLeftNavOpen(!isLeftNavOpen)} id="navClose"></i>
            }
        </div>
    </>
  )
}

export default TopNav