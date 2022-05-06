import React from "react";
import "./OurServices.css";
import Service from "../smallerComponents/Service";
const OurServices = () => {
  return (
    <div className="ourservices">
      <span className="spec">Our Services</span>
      <h1>our main focus</h1>
      <div>
        <Service
          imgUrl="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/icons/icon-img/21.png"
          title="Buy a home"
          desc="over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."
        />
        <Service
          imgUrl="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/icons/icon-img/21.png"
          title="Rent a home"
          desc="over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."
        />
        <Service
          imgUrl="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/icons/icon-img/21.png"
          title="Buy a home"
          desc="over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home."
        />
      </div>
    </div>
  );
};

export default OurServices;
