import React from 'react'
import './AboutChip.css'
const AboutChip = ({Icon, text}) => {
  return (
    <div className='aboutchip'>
        <div className='icon'><Icon/></div>
        <p>{text}</p>
    </div>
  )
}

export default AboutChip