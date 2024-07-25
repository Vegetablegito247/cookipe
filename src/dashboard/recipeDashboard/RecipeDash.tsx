import React from 'react'
import DashHead from '../../components/dashHead/DashHead'
import { CiClock2, CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { categories } from '../../data/data';
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineModeEdit } from "react-icons/md";
import './recipeDash.css'

function RecipeDash() {
    const category = categories;

    return (
        <div className='recipe_dash'>
            <DashHead title='Recipes' />
            <div className="recipe_dash_content">
                <div className="recipe_dash_head">
                    <div className="calendar">
                        <div className="set_calendar"></div>
                        <div className="refresh"></div>
                    </div>
                    <div className="create_post"></div>
                </div>
                <div className="recipe_dash_rec">
                    {
                        category.map((cat) => (
                            <div key={cat.id} className="info_category">
                                <div className="info_img">
                                    <img src={cat.imgSrc} alt="" />
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
                                            <h4>{cat.title}</h4>
                                        </div>
                                        <div className="info_time">
                                            <CiClock2 />
                                            <span>{cat.time}</span>
                                        </div>
                                    </div>
                                    <div className="info_desc">
                                        <p>
                                            {
                                                cat.description
                                            }
                                        </p>
                                    </div>
                                    <div className="info_user_details">
                                        <div className="info_user">
                                            <div className="info_user_img">
                                                <img src={cat.userImgSrc} alt="" />
                                                <span></span>
                                            </div>
                                            <div className="info_user_title">
                                                <h6>{cat.userName}</h6>
                                                <p>{cat.userTitle}</p>
                                            </div>
                                        </div>
                                        <div className="info_edit_post">
                                            <div className="del">
                                                <RiDeleteBinLine />
                                            </div>
                                            <div className="edit">
                                                <MdOutlineModeEdit />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RecipeDash