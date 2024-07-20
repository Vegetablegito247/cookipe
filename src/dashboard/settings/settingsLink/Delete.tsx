import React from 'react'

function Delete() {
    return (
        <div className="delete_set">
            <div className="delete_set_head">
                <div className="calendar">
                    <div className="set_calendar"></div>
                    <div className="refresh"></div>
                </div>
            </div>
            <div className="delete_set_content">
                <div className="delete_content_head">
                    <h3>Delete account</h3>
                </div>
                <div className="delete_content_info">
                    <div className="delete_warning">
                        <i></i>
                        <span>This action cannot be undone</span>
                    </div>
                    <p>
                        All of your data, including your profile, posts, and personal information, will be permanently removed.
                    </p>
                    <p>
                        By entering your password, you confirm that you understand and accept the consequences of deleting your account.
                    </p>
                </div>
                <div className="delete_content_form">
                    <form action="">
                        <div className="delete_inp">
                            <div className="delete_ctrl">
                                <label htmlFor="">Confirm deletion</label>
                                <input type="password" />
                            </div>
                        </div>
                        <div className="delete_btn">
                            <button>Delete account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Delete