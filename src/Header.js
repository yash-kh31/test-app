import React from 'react';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <h2 className="header__title">POSTGRAM</h2>
            <div className="header__subclass">
               <a >Albums</a>
               <a>Photos</a>
            </div>
            
        </div>
    )
}

export default Header;
