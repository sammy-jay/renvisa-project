import React from 'react'
import './Listing.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import NavIcon from './NavIcon'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import {BsArrowsAngleExpand} from 'react-icons/bs'
import {MdOutlineBedroomParent} from 'react-icons/md'
import {FaBath} from 'react-icons/fa'
import {BiShapeSquare} from 'react-icons/bi'

const Listing = () => {
  return (
    <article className='listing'>
         <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        interval={2500}
        showArrows={false}
        statusFormatter={()=>{}}
     >
            <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/1.jpg" alt="" />
            <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/2.jpg" alt="" />
            <img src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/product-3/3.jpg" alt="" />
     </Carousel>
        <div className='inner'>
            <h6>$34,900 <span>/Month</span></h6>
            <h5>New Apartment, Nice View</h5>
            <p>Beautiful Huge 1 Family House in Heart of Westbury. Newly Renovated with New Wood</p>
            <div className='icondiv'>
                <div>
                    <h6>3 <MdOutlineBedroomParent/></h6>
                    <p>Bedrooms</p>
                </div>
                <div className='special'>
                    <h6>2 <FaBath/></h6>
                    <p>Bathrooms</p>
                </div>
                <div>
                    <h6>3450 <BiShapeSquare/></h6>
                    <p>sq. ft</p>
                </div>
            </div>
            <div className='newdiv'>
                <NavIcon Icon={BsArrowsAngleExpand}/>
                <NavIcon Icon={AiOutlineHeart}/>
                <NavIcon Icon={AiOutlinePlusCircle}/>
            </div>
        </div>
    </article>
  )
}

export default Listing