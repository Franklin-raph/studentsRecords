import React,{ useState, useEffect } from 'react'

const Footer = () => {
    const [year, setYear] = useState('');
    const [todaysDate, setTodaysDate] = useState('')
    const [time, setTime] = useState('')
    useEffect(() => {
        const date = new Date()
        setYear(date.getFullYear())
        setTodaysDate(date.toDateString())
    },[])
  return (
    <div className='footer'>
        <p>Copyright &copy; {year}</p>
        <div className='dateAndTime'>
            <p>Date: {todaysDate}</p>
        </div>
    </div>
  )
}

export default Footer