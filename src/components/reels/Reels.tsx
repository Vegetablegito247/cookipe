import React from 'react'

interface Reels {
    reelVideo: string;
    reelTitle: string;
    reelDesc: string;
    reelUserImg: string;
    reelUserFname: string;
    reelUserLname: string;
    reelUserTitle: string;
    reelUserRating: string;
    reelUserBadge: string;
    reelUserLike: number;
    reelUserShare: number;
    reelUserComment: number;

}

function Reels({ reelVideo, reelTitle, reelDesc, reelUserImg, reelUserFname, reelUserLname, reelUserTitle, reelUserRating, reelUserBadge, reelUserLike, reelUserShare, reelUserComment }: Reels) {
    return (
        <div className="video_reel_list">
            <div className="video_reel">
                <div className="video_play">
                    <video src={reelVideo}></video>
                    <div className="video_reactions">
                        <div className="reel_like">
                            <i></i>
                            <span>{reelUserLike}</span>
                        </div>
                        <div className="reel_comment">
                            <i></i>
                            <span>{reelUserComment}</span>
                        </div>
                        <div className="reel_share">
                            <i></i>
                            <span>{reelUserShare}</span>
                        </div>
                    </div>
                </div>
                <div className="info_user_details">
                    <div className="info_user">
                        <div className="info_user_img">
                            <img src={reelUserImg} alt="" />
                            <span></span>
                        </div>
                        <div className="info_user_title">
                            <h6>{reelUserFname + ' ' + reelUserLname}</h6>
                            <span>{reelUserTitle}</span>
                        </div>
                    </div>
                    <div className="info_user_rate">
                        <p>{reelUserRating}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reels