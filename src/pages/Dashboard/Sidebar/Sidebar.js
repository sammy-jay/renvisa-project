import React, { useState } from "react";
import "./Sidebar.css";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineApartment } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { BiMoney } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import SingleItem from "./SingleItem";

const sideList = [
  {
    id: 1,
    title: "Dashboard",
    Icon: MdOutlineDashboardCustomize,
    selected: true,
  },
  {
    id: 2,
    title: "Check Eligibility",
    Icon: AiOutlineCheckCircle,
    selected: false,
  },
  {
    id: 3,
    title: "Find Properties",
    Icon: AiOutlineSearch,
    selected: false,
  },
  {
    id: 4,
    title: "My Apartment",
    Icon: MdOutlineApartment,
    selected: false,
  },
  {
    id: 5,
    title: "Payments",
    Icon: MdOutlinePayments,
    selected: false,
  },
  {
    id: 6,
    title: "Loans",
    Icon: BiMoney,
    selected: false,
  },
  {
    id: 7,
    title: "Settings",
    Icon: AiOutlineSetting,
    selected: false,
  },
  {
    id: 8,
    title: "Logout",
    Icon: FiLogOut,
    selected: false,
  },
];
const Sidebar = () => {
  const [sideItems, setSideItems] = useState(sideList);

  const handleClick = (id) => {
    const newList = sideList.map((item) => {
      if (item.id !== id) item.selected = false;
      else item.selected = true;
      return item;
    });
    setSideItems(newList);
  };
  return (
    <section className="sidebar">
      <div>
        <h2>Home</h2>
      </div>
      <div className="sidebar__biggest">
        {sideItems.slice(0, 5).map((item) => (
          <li onClick={() => handleClick(item.id)} key={item.id}>
            <SingleItem {...item} />
          </li>
        ))}
      </div>
      <div>
        {sideItems.slice(6).map((item) => (
          <li onClick={() => handleClick(item.id)} key={item.id}>
            <SingleItem {...item} />
          </li>
        ))}
      </div>
    </section>
  );
};

export default Sidebar;
