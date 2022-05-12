import React from "react";
import "./SingleItem.css";

const SingleItem = ({ Icon, title, selected }) => {
  return (
    <div style={{ color: selected && "#00dc99" }} className="singleItem">
      <span>
        <Icon />
      </span>
      <p>{title}</p>
    </div>
  );
};

export default SingleItem;
