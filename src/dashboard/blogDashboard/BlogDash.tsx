import React from 'react'
import DashHead from '../../components/dashHead/DashHead';
import { CiClock2, CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";

function BlogDash() {
    return (
        <div className='recipe_dash'>
            <DashHead title='Blogs' />
            <div className="recipe_dash_content">
                <div className="recipe_dash_head">
                    <div className="calendar">
                        <div className="set_calendar"></div>
                        <div className="refresh"></div>
                    </div>
                    <div className="create_post"></div>
                </div>
                <div className="recipe_dash_rec">
                    <div className="info_category">
                        <div className="info_img">
                            <img src='' alt="" />
                            <div className="info_reaction">
                                <div className="react_like">
                                    <CiHeart />
                                    <span>10.1k</span>
                                </div>
                                <div className="react_comment">
                                    <FaRegCommentDots />
                                    <span>10.1k</span>
                                </div>
                                <div className="react_share">
                                    <IoPaperPlaneOutline />
                                    <span>10.1k</span>
                                </div>
                            </div>
                        </div>
                        <div className="info_details">
                            <div className="info_title">
                                <div className="info_name">
                                    <h4></h4>
                                </div>
                                <div className="info_time">
                                    <CiClock2 />
                                    <span></span>
                                </div>
                            </div>
                            <div className="info_desc">
                                <p>

                                </p>
                            </div>
                            <div className="info_user_details">
                                <div className="info_user">
                                    <div className="info_user_img">
                                        <img src='' alt="" />
                                        <span></span>
                                    </div>
                                    <div className="info_user_title">
                                        <h6></h6>
                                        <p></p>
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

export default BlogDash