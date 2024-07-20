import React, { useState } from 'react'
import DashHead from '../../components/dashHead/DashHead';
import { CiClock2, CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import grilled from '../../images/land/landMain/grilled.jpg';
import { categories } from '../../data/data';

function ReelDash() {
    const [category, setCategory] = useState(categories);

    return (
        <div className="reel_dash">
            <DashHead title='Reels' />
            <div className="recipe_dash_content">
                <div className="recipe_dash_head">
                    <div className="calendar">
                        <div className="set_calendar"></div>
                        <div className="refresh"></div>
                    </div>
                    <div className="create_post"></div>
                </div>
                <div className="reel_dash_rec">
                    <div className="video_reel">
                        <div className="video_play">
                            <img src={grilled} alt="" />
                            <div className="reel_container">
                                <div className="video_reactions">
                                    <div className="reel_like">
                                        <CiHeart />
                                        <span>10.1k</span>
                                        <span>likes</span>
                                    </div>
                                    <div className="reel_comment">
                                        <FaRegCommentDots />
                                        <span>10.1k</span>
                                        <span>comments</span>
                                    </div>
                                    <div className="reel_share">
                                        <IoPaperPlaneOutline />
                                        <span>10.1k</span>
                                        <span>share</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="info_details">
                            <div className="info_title">
                                <div className="info_name">
                                    <h4>{category[1].title}</h4>
                                </div>
                                <div className="info_time">
                                    <CiClock2 />
                                    <span>{category[1].time}</span>
                                </div>
                            </div>
                            <div className="info_desc">
                                <p>
                                    {category[1].description}
                                </p>
                            </div>
                            <div className="info_user_details">
                                <div className="info_user">
                                    <div className="info_user_img">
                                        <img src={category[1].userImgSrc} alt="" />
                                        <span></span>
                                    </div>
                                    <div className="info_user_title">
                                        <h6>{category[1].userName}</h6>
                                        <p>{category[1].userTitle}</p>
                                    </div>
                                </div>
                                <div className="info_edit_post">
                                    <div className="del"></div>
                                    <div className="edit"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReelDash