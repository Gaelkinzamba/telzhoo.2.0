import React from 'react';
import './AppLink.css';

const AppLink = props => {

    const { text, background, url  } = props.app

    
    return (
        <div className="app-container" style={{backgroundColor : background}}>
            <h3>
                <a href={url}>{text}</a>
            </h3>
        </div>
    )
}

export default AppLink