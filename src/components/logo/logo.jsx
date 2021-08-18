

import React from 'react';
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";


import "./logo.css";


const Logo = () => {

    return (
        <div className="logo_content" >
            <Link to="/">
                <img className="searchPage__logo" src={logo} alt="/"/>
            </Link>
        </div>
        
    );
}


export default Logo;