import React from 'react';
import './Menu.css';

const Menu = ({handleCloseMenuModal}) => {
    return (
        <div className="overlay" onClick={handleCloseMenuModal}>
            <div className = "menu-modal">
                <div className="menu-actions">
                    <ul>
                        <li> <a href="/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezVZRoHiOL2h1sfPm3xB_MY_sKqFAcopRqQ&usqp=CAU" alt=""/> Login</a></li>
                        <li> <a href="/"><img src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39129/preview.png" alt=""/> Phone book</a></li>
                        <li> <a href="/"><img src="https://www.kindpng.com/picc/m/49-496199_icons-envelope-computer-mail-message-email-email-icon.png" alt=""/> Telmail </a></li>
                        <li> <a href="/"><img src="https://static.thenounproject.com/png/331581-200.png" alt=""/> Maps </a></li>
                        <li> <a href="/"><img src="https://image.freepik.com/free-icon/calendar-icon-black_318-9776.jpg" alt=""/> Calendar </a></li>
                        <li> <a href="/"><img src="https://www.kindpng.com/picc/m/246-2465899_upcoming-events-icon-calendar-icon-png-transparent-png.png" alt=""/> Events </a></li>
                        <li> <a href="/"><img src="https://static.thenounproject.com/png/108235-200.png" alt=""/> Diary </a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Menu
