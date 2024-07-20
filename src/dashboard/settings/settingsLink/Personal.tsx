import React from 'react'

function Personal() {
    return (
        <div className="personal_set">
            <div className="personal_set_head">
                <div className="calendar">
                    <div className="set_calendar"></div>
                    <div className="refresh"></div>
                </div>
            </div>
            <div className="personal_set_content">
                <div className="personal_content_head">
                    <h3>Personal information</h3>
                </div>
                <div className="personal_content_user">
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
                    <div className="personal_chg_pic">
                        <span></span>
                        <span>Change picture</span>
                    </div>
                </div>
                <div className="personal_content_level"></div>
                <div className="personal_content_form">
                    <form action="">
                        <div className="personal_inp">
                            <div className="personal_ctrl">
                                <label htmlFor="">Full name</label>
                                <input type="text" />
                            </div>
                            <div className="personal_ctrl">
                                <label htmlFor="">Email</label>
                                <input type="email" />
                            </div>
                            <div className="personal_ctrl">
                                <label htmlFor="">Phone address</label>
                                <input type="tel" />
                            </div>
                        </div>
                        <div className="personal_btn">
                            <button>Apply changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Personal