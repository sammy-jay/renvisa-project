import React from 'react'
import {BiArea} from 'react-icons/bi'
import {MdApartment} from 'react-icons/md'
import {MdBedroomParent} from 'react-icons/md'
import {MdOutlineEngineering} from 'react-icons/md'
import './Workdone.css'
const Workdone = () => {
    const data = [
        {   
            id : 1,
            Icon: BiArea,
            number: 560,
            text: 'total area sq'
        },
        {   
            id : 2,
            Icon: MdApartment,
            number: 197,
            text: 'apartments sold'
        },
        {   
            id : 3,
            Icon: MdOutlineEngineering,
            number: 268,
            text: 'total constructions'
        },
        {   
            id : 4,
            Icon: MdBedroomParent,
            number: 340,
            text: 'apartment rooms'
        },
    ]
  return (
    <div className='workdone'>
        {data.map((d) => {
            const {id, text,number, Icon} = d
            return(
                <div key={id} className='single'>
                <Icon/> 
                <h1>{number}+</h1>
                <p>{text}</p>
            </div>
            )
        })}
    </div>
  )
}

export default Workdone