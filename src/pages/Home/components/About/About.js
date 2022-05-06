import React from "react";
import Button from "../smallerComponents/Button";
import { IoHomeOutline } from "react-icons/io5";
import { GiMountainCave } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import "./About.css";
import AboutChip from "../smallerComponents/AboutChip";
const About = () => {
  return (
    <section className="aboutsection">
      <div className="first">
        <img
          src="https://tunatheme.com/tf/react/quarter-preview/quarter/assets/img/others/7.png"
          alt=""
        />
      </div>
      <div className="second">
        <span>About Us</span>
        <h1>The leading home rental marketplace</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro nihil,
          hic assumenda sapiente in iusto optio aliquid architecto eius
          adipisci.
        </p>
        <div>
          <AboutChip Icon={IoHomeOutline} text="smart home design" />
          <AboutChip Icon={GiMountainCave} text="beautiful scene around" />
          <AboutChip Icon={CgGym} text="exceptional lifestyle" />
          <AboutChip Icon={MdOutlineSecurity} text="complete 24/7 security" />
        </div>
        <p className="special">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut
          necessitatibus iusto consectetur pariatur quod reiciendis sed porro?
          Amet, voluptate, veniam aliquam autem
        </p>
        <Button text="our services" />
      </div>
    </section>
  );
};

export default About;
