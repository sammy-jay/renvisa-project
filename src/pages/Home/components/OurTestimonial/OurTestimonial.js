import React from 'react'
import './OurTestimonial.css'
import Service from '../smallerComponents/Service'

const OurTestimonial = () => {
  return (
    <div className='ourtestimonial'>
         <span className='spec'>Our Testimonial</span>
        <h1>clients feedback</h1>
        <div>
            <Service imgUrl='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/testimonial/1.jpg' title='John Doe' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur voluptatem nostrum voluptates ipsum placeat consectetur adipisicing elit. Illum consequatur voluptatem' feedback/>
            <Service imgUrl='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/testimonial/2.jpg' title='Kelian Anderson' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur voluptatem nostrum voluptates ipsum placeat consectetur adipisicing elit. Illum consequatur voluptatem' feedback/>
            <Service imgUrl='https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/testimonial/3.jpg' title='Klyain' desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum consequatur voluptatem nostrum voluptates ipsum placeat consectetur adipisicing elit. Illum consequatur voluptatem' feedback/>
        </div>
    </div>
  )
}

export default OurTestimonial