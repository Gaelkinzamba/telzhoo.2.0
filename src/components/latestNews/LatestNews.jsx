import React from 'react';
import './LatestNews.css';


const News = ({news}) => {
    
    const { author, description, title, urlToImage, url } = news;

    return (
        <div className="latestNews__container">
            <div className="latestNews__header">
                <img src={urlToImage} alt="/" />
            </div>
            <div className="latestNews__body">
                <h3 className="latestNews__title"><a href={url}>{title}</a></h3>
                <p className="latestNews__description">{description}</p>
                <span className="latestNews__author">{author}</span>
            </div>
        </div>
    )
}

export default News