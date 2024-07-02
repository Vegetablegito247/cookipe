import React from 'react'

interface Blogs {
    blogImg: string;
    blogTitle: string;
    blogTime: number;
    blogDesc: string;
    blogDate: string;
    blogUserImg: string;
    blogUserFname: string;
    blogUserLname: string;
    blogUserBadge: string;
    blogUserTitle: string;
    blogUserRating: string;
    blogLikeIcon: number;
    blogShareIcon: number;
    blogCommentIcon: number;
}

function Blog({ blogImg, blogTitle, blogTime, blogDesc, blogDate, blogUserImg, blogUserFname, blogUserLname, blogUserBadge, blogUserTitle, blogUserRating, blogLikeIcon, blogShareIcon, blogCommentIcon }: Blogs) {
    return (
        <div className="blog_main">
            <div className="info_category">
                <div className="info_img">
                    <img src={blogImg} alt="" />
                </div>
                <div className="info_details">
                    <div className="info_title">
                        <div className="info_name">
                            <h4>{blogTitle}</h4>
                        </div>
                        <div className="info_time">
                            <i></i>
                            <span>{blogTime}</span>
                        </div>
                    </div>
                    <div className="info_desc">
                        <p>{blogDesc}</p>
                    </div>
                    <div className="info_user_details">
                        <div className="info_user">
                            <div className="info_user_img">
                                <img src={blogUserImg} alt="" />
                                <span>{blogUserBadge}</span>
                            </div>
                            <div className="info_user_title">
                                <h6>{blogUserFname} {blogUserLname}</h6>
                                <span>{blogUserTitle}</span>
                            </div>
                        </div>
                        <div className="info_user_rate">
                            <p>{blogUserRating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog