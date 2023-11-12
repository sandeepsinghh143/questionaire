import React from 'react';
import "../styles/Header.css";
import { NavLink } from 'react-router-dom';
import {RxDashboard} from "react-icons/rx"
import {ImBook} from "react-icons/im"
import {MdOutlineHub} from "react-icons/md"
import {GrAchievement} from "react-icons/gr"

const Header = () => {
  return (
    <header>
        <div className="logo">Quiz App</div>
        <nav className="navbar">
            <ul className='nav-list'>
                <NavLink to={"/dashboard"}><RxDashboard/><li>Dashboard</li></NavLink>
                <NavLink to={"/courses"}><ImBook/><li>Courses</li></NavLink>
                <NavLink to={"/learning"}><MdOutlineHub/><li>Learning Lab</li></NavLink>
                <NavLink to={"/achievements"}><GrAchievement/><li>Achievements</li></NavLink>
            </ul>
        </nav>
    </header>
  )
}

export default Header