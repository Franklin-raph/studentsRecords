import React, { useState } from 'react'

const useModal = () => {
    const [isShowing, setIsShowing] = useState(false);

    function toggle(){
        setIsShowing(!isShowing)
    }

  return {
    setIsShowing,
    toggle,
  }
}

export default useModal