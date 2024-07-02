import React from 'react';
import './style/createAcct.css';
import create from '../../images/form/signup.png';
import right from '../../images/land/landHead/right.png';

function CreateAcct() {
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
                            <h3>Create an account! 👨🏿‍🍳👨🏻‍🍳</h3>
                            <p>
                                Fill in the form to be among the top chef blogger in the world.
                            </p>
                        </div>
                    </div>
                    <form action="">
                        <div className="create_ctrl">
                            <div className="create_inp">
                                <label htmlFor="">Full name / Business name</label>
                                <input type="text" name="" id="" />
                            </div>
                            <div className="create_inp">
                                <label htmlFor="">Email</label>
                                <input type="email" name="" id="" />
                            </div>
                            <div className="create_inp">
                                <label htmlFor="">Contact </label>
                                <input type="tel" name="" id="" />
                            </div>
                        </div>
                        <div className="create_btn">
                            <button>Next</button>
                        </div>
                    </form>
                    <img src={right} alt="" className="img_rigt" />
                    <img src={right} alt="" className="img_rigt2" />
                </div>
            </div>
        </div>
    )
}

export default CreateAcct