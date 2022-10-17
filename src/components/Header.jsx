import React from "react";

import "./Header.css";

const Header = ({ onClick, logIn }) => {
  return (
    <>
        <div className="header">
        {logIn ? ( 
        <>
            <div className="prozeta">PROZETA</div>
            <div className="right_side">
                <div className="logIn_name">Jméno</div>
                <div className="logIn" onClick={onClick}>LogOut</div>
            </div>
        </>) 
        : (
        <>
            <div className="prozeta">PROZETA</div>
            <div className="logIn" onClick={onClick}>LogIn</div>
        </>) 
        }
      
    </div>
    </>
  )
}

export default Header
