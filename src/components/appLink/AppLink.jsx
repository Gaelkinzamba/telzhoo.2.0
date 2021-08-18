import React from 'react';
import './AppLink.css';

const AppLink = props => {

    const { text, background, url, logo  } = props.app

    
    return (
        <div className="app-container" style={{backgroundColor :''}}>
            <h3>
                <a href={url}>
                    {/* { text } */}
                   <img src= {logo} height="30" width="30" />
                </a>
            </h3>
        </div>
    )
}

export default AppLink
