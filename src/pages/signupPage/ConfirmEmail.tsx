import React, { useRef, useState, ChangeEvent, KeyboardEvent } from 'react';
import './style/confirmEmail.css';
import create from '../../images/form/signup.png';
import right from '../../images/land/landHead/right.png';

function ConfirmEmail() {
    const [code, setCode] = useState<string[]>(new Array(6).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const element = event.target;
        if (!isNaN(Number(element.value)) && element.value !== '') {
            const newCode = [...code];
            newCode[index] = element.value;
            setCode(newCode);

            // Move to next input if current is filled
            if (element.value !== '' && index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleBackspace = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (event.key === 'Backspace' && code[index] === '') {
            if (index !== 0) {
                inputRefs.current[index - 1]?.focus();
            }
        } else if (event.key === 'Backspace') {
            const newCode = [...code];
            newCode[index] = '';
            setCode(newCode);
        }
    };

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
                            <h3>Kindly confirm your email</h3>
                            <p>
                                Enter 6 digit code sent to your email
                            </p>
                        </div>
                    </div>
                    <form action="">
                        <div className="create_ctrl_code">
                            {code.map((value, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    maxLength={1}
                                    value={value}
                                    onChange={(e) => handleChange(e, index)}
                                    onKeyDown={(e) => handleBackspace(e, index)}
                                    ref={(el) => (inputRefs.current[index] = el)}
                                    className="code-input"
                                    required
                                />
                            ))}
                        </div>
                        <div className="create_pwd_btn">
                            <button>Previous page</button>
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

export default ConfirmEmail;
