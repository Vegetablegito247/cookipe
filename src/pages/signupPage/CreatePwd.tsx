import React from 'react';
import './style/createPwd.css';
import create from '../../images/form/signup.png';
import right from '../../images/land/landHead/right.png';

function CreatePwd() {
    return (
        <div className='create_acct'>
            <div className="create_display">
                <div className="create_img">
                    <img src={create} alt="" />
                    <h3>
                        Unleash your culinary passion
                        with us!
                    </h3>
                </div>
                <div className="create_form">
                    <div className="create_form_head">
                        <div className="create_form_logo">
                            <i></i>
                            <h3>Cookipé</h3>
                        </div>
                        <div className="create_form_title">
                            <h3>Set your password 👨🏿‍🍳👨🏻‍🍳</h3>
                            <p>
                                Create your password to keep your account safe.
                            </p>
                        </div>
                    </div>
                    <form action="">
                        <div className="create_ctrl">
                            <div className="create_inp">
                                <label htmlFor="">Password</label>
                                <input type="email" name="" id="" />
                            </div>
                            <div className="create_inp">
                                <label htmlFor="">Confirm password </label>
                                <input type="tel" name="" id="" />
                            </div>
                        </div>
                        <div className="create_pwd_btn">
                            <button>Previous page</button>
                            <button>Create account</button>
                        </div>
                    </form>
                    <img src={right} alt="" className="img_rigt" />
                    <img src={right} alt="" className="img_rigt2" />
                </div>
            </div>
        </div>
    )
}

export default CreatePwd