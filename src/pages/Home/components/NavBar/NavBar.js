import React from 'react'
import './NavBar.css'
import {BiSearch} from 'react-icons/bi'
import {GrUser} from 'react-icons/gr'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import NavIcon from '../smallerComponents/NavIcon'
const NavBar = () => {
  return (
    <nav className='navbar'>
        <div>
            <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/logo.png" alt="" />
        </div>
        <div className='navlinks'>
            <ul>
                <li>Home</li>
                <li>Our Projects</li>
                <li>Our Countries</li>
                <li>Market Trends</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className='icons'>
        <NavIcon Icon={BiSearch}/>
        <NavIcon Icon={GrUser}/>
        <NavIcon Icon={AiOutlineShoppingCart}/>

        </div>
        
    </nav>
  )
}

export default NavBar