import React from 'react';
import './styles/landHead.css';
import { CiSearch } from "react-icons/ci";
import black1 from '../../images/userImg/black.jpg';
import black2 from '../../images/userImg/fire.jpg';
import black3 from '../../images/userImg/black3.jpg';
import food1 from '../../images/land/landHead/food1.png';
import food2 from '../../images/land/landHead/food2.png';
import right from '../../images/land/landHead/right.png';
import left from '../../images/land/landHead/left.png';

function LandHead() {
    return (
        <header>
            <div className="land_head">
                <div className="explore">
                    <div className="header_text">
                        <h1>
                            Explore the World of Taste and Aromas
                        </h1>
                        <p>
                            Discover 10,000+ recipes from the best chefs
                        </p>
                    </div>
                    <div className="searchbar">
                        <form action="">
                            <div className="inp_ctrl">
                                <input type="text" name="" placeholder='Find recipes...' />
                            </div>
                            <button className="frm_btn">
                                <CiSearch className='srchIcon'/>
                                <span>Search</span>
                            </button>
                        </form>
                    </div>
                    <div className="land_head_user">
                        <div className="land_count_recipe">
                            <span>5k+</span>
                            <span>Recipes</span>
                        </div>
                        <div className="land_count_user">
                            <img src={black1} alt="" />
                            <img src={black2} alt="" />
                            <img src={black3} alt="" />
                        </div>
                        <div className="land_count_chef">
                            <span>8k+</span>
                            <span>Chefs</span>
                        </div>
                    </div>
                </div>

                <div className="land_head_img_rep">
                    <div className="land_head_img1">
                        <img src={food1} alt="" />
                    </div>
                    <div className="land_head_img2">
                        <img src={food2} alt="" />
                    </div>
                </div>
                <div className="rectangle2"></div>
                <img src={right} alt="" className="img_right" />
                <img src={left} alt="" className="img_left" />
            </div>
            <div className="rectangle1"></div>
        </header>
    )
}

export default LandHead