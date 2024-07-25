import React from 'react';
import './dashHead.css';
import user from '../../images/userImg/black3.jpg';
import { CiSearch } from "react-icons/ci";
import { GoBell, GoDotFill } from "react-icons/go";

interface Props {
    title: string
}

function DashHead({ title }: Props) {
    return (
        <div className='dash_head'>
            <div className="dash_title">
                <h3>{title}</h3>
            </div>
            <div className="dash_info">
                <div className="dash_search">
                    <form action="">
                        <div className="dash_head_inp">
                            <CiSearch />
                            <input type="search" placeholder='Search...' id="" />
                        </div>
                    </form>
                </div>
                <div className="dash_notification">
                    <GoBell className='notify' />
                    <GoDotFill className='dot' />
                </div>
                <div className="dash_notify_user">
                <div className="dash_foot_img">
                        <img src={user} alt="" />
                    </div>
                    <div className="dash_foot_info">
                        <h3>Olaoluwa Abijo</h3>
                        <p>Chef</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashHead