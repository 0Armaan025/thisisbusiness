import React from 'react';
import './loginbutton.css';

const LoginButton = (props) => {
  return (
    <>
    <div className="loginButton">
        <button type="button" className={props.className}>{props.buttonName}</button>
    </div>
    </>
  )
}

export default LoginButton
