import React from 'react'

interface Recipe {
    recipeImg: string;
    recipeTitle: string;
    recipeTime: number;
    recipeDesc: string;
    recipeDate: string;
    recipeUserImg: string,
    recipeUserFname: string;
    recipeUserLname: string;
    recipeUserBadge: string;
    recipeUserTitle: string;
    recipeUserRating: string;
    recipeLikeIcon: number;
    recipeShareIcon: number;
    recipeCommentIcon: number;
}

function Recipe({ recipeImg, recipeTitle, recipeTime, recipeDesc, recipeDate, recipeUserImg, recipeUserFname, recipeUserLname, recipeUserBadge, recipeUserTitle, recipeUserRating, recipeLikeIcon, recipeShareIcon, recipeCommentIcon }: Recipe) {
    return (
        <div className="recipe_main">
            <div className="info_category">
                <div className="info_img">
                    <img src={recipeImg} alt="" />
                </div>
                <div className="info_details">
                    <div className="info_title">
                        <div className="info_name">
                            <h4>{recipeTitle}</h4>
                        </div>
                        <div className="info_time">
                            <i></i>
                            <span>{recipeTime}</span>
                        </div>
                    </div>
                    <div className="info_desc">
                        <p>{recipeDesc}</p>
                    </div>
                    <div className="info_user_details">
                        <div className="info_user">
                            <div className="info_user_img">
                                <img src={recipeUserImg} alt="" />
                                <span>{recipeUserBadge}</span>
                            </div>
                            <div className="info_user_title">
                                <h6>{recipeUserFname} {recipeUserLname}</h6>
                                <span>{recipeUserTitle}</span>
                            </div>
                        </div>
                        <div className="info_user_rate">
                            <p>{recipeUserRating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe