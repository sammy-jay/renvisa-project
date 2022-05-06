import React from 'react'
import './FeaturedListings.css'
import Listing from '../smallerComponents/Listing'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const FeaturedListings = () => {
  return (
    <div className='featuredlistings'>
         <span className='spec'>Properties</span>
        <h1>our main focus</h1>
         <div className='featuredlistingscarousel'>
         <Listing/>
         <Listing/>
         <Listing/>
         <Listing/>
         <Listing/>
     </div>
    </div>
  )
}

export default FeaturedListings

// autoPlay={true}
//         infiniteLoop={true}
//         showThumbs={true}
//         centerMode
//         centerSlidePercentage={30}
//         showIndicators={false}
//         interval={5500}
//         showArrows={true}
//         statusFormatter={()=>{}}