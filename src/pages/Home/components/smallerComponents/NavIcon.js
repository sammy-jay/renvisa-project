import React from 'react'
import './NavIcon.css'

const NavIcon = ({Icon}) => {
  return (
    <div className='navicon'>{<Icon fontSize='20px'/>}</div>
  )
}

export default NavIcon