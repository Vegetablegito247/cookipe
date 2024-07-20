import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './dashboard.css'

function Dashboard() {
  return (
    <div>
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
                                <NavLink to='' >
                                    <i></i>
                                    <span>Overview</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='' >
                                    <i></i>
                                    <span>Recipes</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='' >
                                    <i></i>
                                    <span>Reels</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='' >
                                    <i></i>
                                    <span>Blogs</span>
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
                                <NavLink to='' >
                                    <i></i>
                                    <span>Settings</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='' >
                                    <i></i>
                                    <span>Logout</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="dash_side_footer">
                <div className="dash_foot_img"></div>
                <div className="dash_foot_info">
                    <h3></h3>
                    <span></span>
                </div>
            </div>
        </div>
        <div className="dash_display">
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard