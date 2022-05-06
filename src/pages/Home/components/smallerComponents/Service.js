import React from 'react'
import './Service.css'
const Service = ({imgUrl, title, desc,feedback=false}) => {
  return (
    <article className='service'>
        <img src={imgUrl} alt={title} className={`${feedback} && feedback`} />
        <h6>{title}</h6>
        <p>{desc}</p>
        {!feedback && <span>Find A Home</span>}
    </article>
  )
}

export default Service