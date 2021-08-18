


import React from 'react';
import Images from '../../components/images/images';
import Logo from '../../components/logo/logo';

// import css
import './images.css';


const ImagesPage = () => {
    const urlParams = new URLSearchParams( window.location.search );
    const query = urlParams.get("dshbfsjdhfjd");
    
    return (
        <div className="images_content" >
            <Logo />
            
            <Images query={ query }/>

        </div>
    );
}



export default ImagesPage;