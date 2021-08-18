import React from 'react'
import './SideBar.css'

const Sidebar = props => {
    
    return (
        <div className="side-bar">
            <h5>Add your app </h5>
            <img src="https://cdn3.iconfinder.com/data/icons/common-version2-2/1024/add_square-512.png" alt="/" className="add-icon"/>
            <div>
                <ul>
                    <li>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a0/YouTube_social_red_circle_%282017%29.svg" alt="/" width="35" height="35"/>
                    </li>
                    <li>
                        <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt="/" width="35" height="35"/>
                    </li>
                    <li>
                        <img src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" alt="/" width="35" height="35"/>
                    </li>
                    <li>
                        <img src="https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png" alt="/" width="35" height="35"/>
                    </li>
                    <li>
                        <img src="https://lh3.googleusercontent.com/proxy/Pyq77cXJ6u015YfgGOqgUy3mIkHd_iehT6kJYPydRseKslb7mKVw6tNOx6tuo9W--r3eZXyaCyX8CIi0XGenRj4YZg9nCjfnvAyUrnuXBV1X" alt="/" width="35" height="35"/>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
