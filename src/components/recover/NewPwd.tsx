import React from 'react';
import './recover.css';
import { FaXmark } from 'react-icons/fa6';

function NewPwd() {
    return (
        <div className='rec_pwd'>
            <div className="rec_form">
                <div className="rec_close">
                    <FaXmark />
                </div>
                <div className="rec_head">
                    <h3>
                        Create new password.
                    </h3>
                    <p>
                        Create a new password for your account.
                    </p>
                </div>
                <form action="">
                    <div className="rec_ctrl">
                        <div className="rec_inp">
                            <label htmlFor="">Enter new password</label>
                            <input type="password" />
                        </div>
                        <div className="rec_inp">
                            <label htmlFor="">Confirm new password</label>
                            <input type="password" />
                        </div>
                    </div>
                    <div className="rec_btn">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewPwd