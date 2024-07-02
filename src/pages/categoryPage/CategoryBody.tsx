import React from 'react';
import caesar from '../../images/land/landMain/caesar.jpg';
import carbonara from '../../images/land/landMain/carbonara.jpg';
import fried from '../../images/land/landMain/fried.jpg';
import grilled from '../../images/land/landMain/grilled.jpg';
import tacos from '../../images/land/landMain/tacos.jpg';
import user from '../../images/userImg/black3.jpg';
import { CiClock2, CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import './style/categoryBody.css'

function CategoryBody() {
    const categories = [
        {
            id: 1,
            imgSrc: fried,
            title: 'Fried Rice',
            time: '12mins',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam tempora fuga sit beatae sapiente? Magni sequi quia veritatis natus nihil fuga repudiandae aspernatur quisquam fugiat? Soluta dicta adipisci minima eligendi.',
            userImgSrc: user,
            userName: 'Samuel John',
            userTitle: 'Chef',
            userRating: '5 star'
        },
        {
            id: 2,
            imgSrc: grilled,
            title: 'Grilled Chicken',
            time: '20mins',
            description: 'Delicious grilled chicken with a perfect blend of spices, cooked to perfection. Enjoy the flavors of our chef\'s special recipe.',
            userImgSrc: user,
            userName: 'Emily Clark',
            userTitle: 'Chef',
            userRating: '4.5 star'
        },
        {
            id: 3,
            imgSrc: carbonara,
            title: 'Pasta Carbonara',
            time: '15mins',
            description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Simple yet incredibly flavorful.',
            userImgSrc: user,
            userName: 'Michael Smith',
            userTitle: 'Chef',
            userRating: '5 star'
        },
        {
            id: 4,
            imgSrc: caesar,
            title: 'Caesar Salad',
            time: '10mins',
            description: 'Crisp romaine lettuce, creamy Caesar dressing, crunchy croutons, and grated Parmesan cheese. A refreshing and healthy choice.',
            userImgSrc: user,
            userName: 'Anna Brown',
            userTitle: 'Chef',
            userRating: '4.8 star'
        },
        {
            id: 5,
            imgSrc: tacos,
            title: 'Beef Tacos',
            time: '25mins',
            description: 'Spicy beef tacos served with fresh salsa, guacamole, and a squeeze of lime. A true fiesta of flavors.',
            userImgSrc: user,
            userName: 'David Wilson',
            userTitle: 'Chef',
            userRating: '5 star'
        },
        {
            id: 6,
            imgSrc: tacos,
            title: 'Beef Tacos',
            time: '25mins',
            description: 'Spicy beef tacos served with fresh salsa, guacamole, and a squeeze of lime. A true fiesta of flavors.',
            userImgSrc: user,
            userName: 'David Wilson',
            userTitle: 'Chef',
            userRating: '5 star'
        },
        {
            id: 7,
            imgSrc: fried,
            title: 'Fried Rice',
            time: '12mins',
            description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam tempora fuga sit beatae sapiente? Magni sequi quia veritatis natus nihil fuga repudiandae aspernatur quisquam fugiat? Soluta dicta adipisci minima eligendi.',
            userImgSrc: user,
            userName: 'Samuel John',
            userTitle: 'Chef',
            userRating: '5 star'
        },
        {
            id: 8,
            imgSrc: grilled,
            title: 'Grilled Chicken',
            time: '20mins',
            description: 'Delicious grilled chicken with a perfect blend of spices, cooked to perfection. Enjoy the flavors of our chef\'s special recipe.',
            userImgSrc: user,
            userName: 'Emily Clark',
            userTitle: 'Chef',
            userRating: '4.5 star'
        },
        {
            id: 9,
            imgSrc: carbonara,
            title: 'Pasta Carbonara',
            time: '15mins',
            description: 'A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper. Simple yet incredibly flavorful.',
            userImgSrc: user,
            userName: 'Michael Smith',
            userTitle: 'Chef',
            userRating: '5 star'
        },
    ];

    return (
        <div className="category_main">
            {
                categories.map((recipe) => (
                    <div key={recipe.id} className="info_category">
                        <div className="info_img">
                            <img src={recipe.imgSrc} alt="" />
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
                                    <h4>{recipe.title}</h4>
                                </div>
                                <div className="info_time">
                                    <CiClock2 />
                                    <span>{recipe.time}</span>
                                </div>
                            </div>
                            <div className="info_desc">
                                <p>
                                    {recipe.description}
                                </p>
                            </div>
                            <div className="info_user_details">
                                <div className="info_user">
                                    <div className="info_user_img">
                                        <img src={recipe.userImgSrc} alt="" />
                                        <span></span>
                                    </div>
                                    <div className="info_user_title">
                                        <h6>{recipe.userName}</h6>
                                        <p>{recipe.userTitle}</p>
                                    </div>
                                </div>
                                <div className="info_user_rate">
                                    <p>{recipe.userRating}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryBody