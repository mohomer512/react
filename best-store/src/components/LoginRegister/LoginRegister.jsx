import React from 'react';
import { Link } from "react-router-dom"
import './LoginRegister.css';

const LoginRegister = () => {
    return (
<div className='warpper'>
    <div className='form-box lgoin'>
        <form action="">
            <h1>Login</h1>
            <div className="input-box">
                <input type="text" placeholder='Username' required/>

            </div>
        </form>
        </div> 
</div>

    );

};

export default LoginRegister;
