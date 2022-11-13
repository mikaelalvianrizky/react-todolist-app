import React from 'react';
import logo from '../img/logo.svg';

import '../style/Header.css';

const Header = () => {
    return (
        <div className="Header">
            <img src={logo} alt="logo" />
            <h1>React TodoList</h1>
        </div>
    )
}

export default Header;