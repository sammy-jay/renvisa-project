import React from 'react'
import './TopmostNav.css'
import Button from '../smallerComponents/Button'
import {GoMail} from 'react-icons/go'
import {IoLocationOutline} from 'react-icons/io5'
import {FaFacebookF, FaTwitter,FaLinkedinIn} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const TopmostNav = () => {
  return (
    <div className='topmostnav'>
        <div className='leftside'>
            <div>
                <span><GoMail/></span>
                <span>info@webmail.com</span>
            </div>
            <div>
               <span> <IoLocationOutline/></span>
                <span>15/A, Nest Tower, NYC</span>
            </div>
        </div>
        <div className='spacer'/>
        <div className='rightside'>
            <div>
                <FaFacebookF/>
                <FaTwitter/>
                <BsInstagram/>
                <FaLinkedinIn/>
            </div>
            <button>Add listing</button>

        </div>
    </div>
  )
}

export default TopmostNav