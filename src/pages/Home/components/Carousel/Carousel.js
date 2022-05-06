import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";
import Button from "../smallerComponents/Button";
import { IoHome } from "react-icons/io5";
const CustomCarousel = () => {
  return (
    <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showThumbs={false}
      showIndicators={false}
      interval={5500}
      showArrows={false}
      statusFormatter={() => {}}
      className="customcarousel"
    >
      <div>
        <div className="contentmanager">
          <h4>
            {" "}
            <IoHome fontSize="20px" />
            Renvisa Homes Agency
          </h4>
          <h1>Find Your dream house by us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            consequatur voluptatem nostrum voluptates ipsum placeat{" "}
          </p>
          <Button text="Make an enquiry" />
        </div>
        <img src="https://tunatheme.com/tf/react/quarter-preview/quarter//assets/img/slider/21.png" />
      </div>
      <div>
        <div className="contentmanager">
          <h4>
            <IoHome fontSize="20px" /> Real Estate Agency
          </h4>
          <h1>Find Your dream house by us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
            consequatur voluptatem nostrum voluptates ipsum placeat{" "}
          </p>
          <Button text="Make an enquiry" />
        </div>
        <img src="https://tunatheme.com/tf/react/quarter-preview/quarter//assets/img/slider/21.png" />
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
