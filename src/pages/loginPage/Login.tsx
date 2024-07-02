import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../images/form/login.png';
import './login.css';
import google from '../../images/form/google.png';
import right from '../../images/land/landHead/right.png';
import RecoverEmail from '../../components/recover/RecoverEmail';
import RecoverOTP from '../../components/recover/RecoverOTP';
import NewPwd from '../../components/recover/NewPwd';

function Login() {
    return (
        <div className='create_acct'>
            <NewPwd />
            <div className="create_display">
                <div className="create_img">
                    <img src={login} alt="" />
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
                            <h3>Welcome back! 👨🏿‍🍳👨🏻‍🍳</h3>
                            <p>
                                Welcome back. Please enter your details.
                            </p>
                        </div>
                    </div>
                    <form action="">
                        <div className="create_ctrl">
                            <div className="create_inp">
                                <label htmlFor="">Email</label>
                                <input type="email" name="" id="" />
                            </div>
                            <div className="create_inp">
                                <label htmlFor="">Password </label>
                                <input type="password" name="" id="" />
                            </div>
                        </div>
                        <div className="save_forget">
                            <div className="save">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Save my info</label>
                            </div>
                            <div className="forget">
                                <Link to=''>Forget password</Link>
                            </div>
                        </div>
                        <div className="create_btn">
                            <button>Log in</button>
                        </div>
                    </form>
                    <div className="or">
                        <span>or</span>
                    </div>
                    <div className="google">
                        <img src={google} alt="" />
                        <span>Continue with google</span>
                    </div>
                    <div className="new_cookipe">
                        <span>New to cookipé ? <Link to=''>Create an account</Link></span>
                    </div>
                    <img src={right} alt="" className="img_rigt" />
                    <img src={right} alt="" className="img_rigt2" />
                </div>
            </div>
        </div>
    )
}

export default Login