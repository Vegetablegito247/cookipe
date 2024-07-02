import React from 'react';
import { FaBookReader, FaChartLine, FaNewspaper } from "react-icons/fa";
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

function NavMobile() {
    return (
        <div className="nav_mobile">
            <div className="nav_mobile_list">
                <div className="nav_mob_icon">
                    <FaNewspaper />
                </div>
                <div className="nav_mob_info">
                    <span>Latest</span>
                </div>
            </div>
            <div className="nav_mobile_list">
                <div className="nav_mob_icon">
                    <FaChartLine />
                </div>
                <div className="nav_mob_info">
                    <span>Popular</span>
                </div>
            </div>
            <div className="nav_mobile_list">
                <div className="nav_mob_icon">
                    <IoMdAddCircle />
                </div>
                <div className="nav_mob_info">
                    <span>Add post</span>
                </div>
            </div>
            <div className="nav_mobile_list">
                <div className="nav_mob_icon">
                    <MdOutlineSlowMotionVideo />
                </div>
                <div className="nav_mob_info">
                    <span>Videos</span>
                </div>
            </div>
            <div className="nav_mobile_list">
                <div className="nav_mob_icon">
                    <FaBookReader />
                </div>
                <div className="nav_mob_info">
                    <span>Blogs</span>
                </div>
            </div>
        </div>
    )
}

export default NavMobile