
import React from 'react';


import './images.css';

async function searchImages( q ) {
    
    q = encodeURIComponent(q);

    // console.log("API FUNC QUERY", q );

    const response = await fetch(`https://bing-image-search1.p.rapidapi.com/images/search?q=${q}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "c4107ec3femsh8c754d5a06c5866p1500b6jsn7a63942b4e5e",
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        }
    });

    const body = await response.json();
    console.log( "IMAGES SEARCH ", body.value); 
    // console.log("search news  body");
    return body.value;
}


const Images = ( props ) => {
    // console.log( "hello world", props );
    const [query, setQ] = React.useState( props.query );
    const [images, setImages] = React.useState([]);


    React.useEffect(() => {
            // setQ( props.query );
            // console.log( "YOUR IMAGES ARE HERE: " + props.query );
            searchImages( props.query ).then(setImages)
        }, [ props.query ] // this is used to stop the infinite loop of useEffect
    );

    return (
        <div className="images" >
            {
                images && images.map( image => (
                    <div className="images_container" >
                        
                        <a href= { image.contentUrl } target="_blank" >
                            <img src={
                                image.contentUrl === undefined ? "" : image.contentUrl} 
                                className="image"
                             />
                        </a>
                       
                    </div>

                ))
            }
        </div>
    );
}


export default Images;