import React from 'react';
import { HiOutlineDesktopComputer, HiOutlineTerminal, HiOutlineSparkles, HiOutlineBookOpen, HiOutlineCode } from "react-icons/hi";

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <HiOutlineBookOpen className="about__icon" />
            <h3 className="about__title">GPA</h3>
            <span className="about__subtitle">4.00</span>
        </div>
        <div className="about__box">
            <HiOutlineCode className="about__icon" />
            <h3 className="about__title">Focus</h3>
            <span className="about__subtitle">Web Dev</span>
        </div>
        <div className="about__box">
            <HiOutlineSparkles className="about__icon" />
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  );
}

export default Info;