import React, { useRef, useState, ChangeEvent, KeyboardEvent } from 'react';
import './recover.css';
import { FaXmark } from 'react-icons/fa6';

function RecoverOTP() {
    const [code, setCode] = useState<string[]>(new Array(6).fill(''));
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
        const element = event.target;
        if (!isNaN(Number(element.value)) && element.value !== '') {
            const newCode = [...code];
            console.log(newCode);
            newCode[index] = element.value;
            setCode(newCode);
            console.log(newCode);

            if (element.value !== '' && index < inputRefs.current.length - 1) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleBackSpace = (event: KeyboardEvent<HTMLInputElement>, index: number) => {
        if (event.key === 'Backspace' && code[index] === '') {
            if (index !== 0) {
                inputRefs.current[index - 1]?.focus();
            }
        }
        else if (event.key === 'Backspace') {
            const newCode = [...code];
            newCode[index] = '';
            setCode(newCode);
        }
    }

    return (
        <div className='rec_otp'>
            <div className="rec_form">
                <div className="rec_close">
                <FaXmark />
                </div>
                <div className="rec_head">
                    <h3>
                        Enter OTP.
                    </h3>
                    <p>
                        Kindly provide 6 digit code sent to "akalmin247@gmail.com".
                    </p>
                </div>
                <form action="">
                    <div className="rec_ctrl_code">
                        {code.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength={1}
                                value={value}
                                onChange={(e) => handleChange(e, index)}
                                onKeyDown={(e) => handleBackSpace(e, index)}
                                ref={(el) => (inputRefs.current[index] = el)}
                                className="code-input"
                                required
                            />
                        ))}
                    </div>
                    <div className="rec_btn">
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RecoverOTP