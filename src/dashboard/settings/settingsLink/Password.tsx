import React from 'react'

function Password() {
    return (
        <div className="password_set">
            <div className="password_set_head">
                <div className="calendar">
                    <div className="set_calendar"></div>
                    <div className="refresh"></div>
                </div>
            </div>
            <div className="password_set_content">
                <div className="password_content_head">
                    <h3>Change password</h3>
                </div>
                <div className="password_content_form">
                    <form action="">
                        <div className="password_inp">
                            <div className="password_ctrl">
                                <label htmlFor="">Current passweord</label>
                                <input type="password" />
                            </div>
                            <div className="password_ctrl">
                                <label htmlFor="">New password</label>
                                <input type="password" />
                            </div>
                            <div className="password_ctrl">
                                <label htmlFor="">Confirm password</label>
                                <input type="password" />
                            </div>
                        </div>
                        <div className="password_btn">
                            <button>Save changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Password