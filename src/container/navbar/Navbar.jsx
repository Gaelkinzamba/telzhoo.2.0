import React from 'react';
import './Navbar.css';

const Navbar = ({handleUserModal, handleMenuModal}) => {

    return (
        <div className="nav-bar">
            <div className="user-account" onClick={() => handleUserModal()}>
                <img src="https://cdn0.iconfinder.com/data/icons/thin-users-people/57/thin-191_user_profile_avatar-512.png" alt="/" />    
            </div>
            <div className="menu" onClick={() => handleMenuModal()}>
                <img src="https://cdn0.iconfinder.com/data/icons/heroicons-ui/24/icon-menu-512.png" alt="/" />
            </div>
        </div>
    )
}

export default Navbar
