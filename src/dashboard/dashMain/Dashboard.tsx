import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { IoGridOutline, IoSettingsOutline, IoChevronForward } from "react-icons/io5";
import { TbBowlSpoon } from "react-icons/tb";
import { FaBookReader } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import user from '../../images/userImg/black3.jpg';
import './dashboard.css';

function Dashboard() {
    

    return (
        <div className='dashboard'>
            <div className="dash_side">
                <div className="dash_side_logo">
                    <h3>Cookipé</h3>
                </div>
                <div className="dash_side_nav">
                    <div className="dash_main_nav">
                        <div className="dash_main_head">
                            <h3>MAIN</h3>
                        </div>
                        <div className="dash_main_list">
                            <ul>
                                <li>
                                    <NavLink to={''} end>
                                        <div className="dash_item">
                                            <IoGridOutline />
                                            <span>Overview</span>
                                        </div>
                                        <IoChevronForward />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='recipes' >
                                        <div className="dash_item">
                                            <TbBowlSpoon />
                                            <span>Recipes</span>
                                        </div>
                                        <IoChevronForward />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='reels' >
                                        <div className="dash_item">
                                            <MdOutlineSlowMotionVideo />
                                            <span>Reels</span>
                                        </div>
                                        <IoChevronForward />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='blogs' >
                                        <div className="dash_item">
                                            <FaBookReader />
                                            <span>Blogs</span>
                                        </div>
                                        <IoChevronForward />
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="dash_other_nav">
                        <div className="dash_other_head">
                            <h3>OTHER</h3>
                        </div>
                        <div className="dash_other_list">
                            <ul>
                                <li>
                                    <NavLink to='/settings' >
                                        <div className="dash_item">
                                            <IoSettingsOutline />
                                            <span>Settings</span>
                                        </div>
                                        <IoChevronForward />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/logout' >
                                        <div className="dash_item">
                                            <CiLogout />
                                            <span>Logout</span>
                                        </div>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="dash_side_footer">
                    <div className="dash_foot_img">
                        <img src={user} alt="" />
                    </div>
                    <div className="dash_foot_info">
                        <h3>Olaoluwa Abijo</h3>
                        <p>Chef</p>
                    </div>
                </div>
            </div>
            <div className="dash_display">
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;
