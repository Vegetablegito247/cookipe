import React from 'react';
import './recover.css';
import { FaXmark } from 'react-icons/fa6';

function RecoverEmail() {
    return (
        <div className='rec_email'>
            <div className="rec_form">
                <div className="rec_close">
                    <FaXmark />
                </div>
                <div className="rec_head">
                    <h3>
                        Recover your account.
                    </h3>
                    <p>
                        Kindly enter your details to recover your account.
                    </p>
                </div>
                <form action="">
                    <div className="rec_ctrl">
                        <div className="rec_inp">
                            <label htmlFor="">Email address</label>
                            <input type="email" />
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

export default RecoverEmail