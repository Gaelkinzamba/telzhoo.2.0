import React from 'react';
import { newsApi } from '../../utils/newsApi';
import './RecentNews.css'

const News = () => {
    return (
        <div className="recent-news-section">
            {
                newsApi.map((news, index) => {
                    const { title, urlToImage, url } = news;
                    return   <div className="news__container" key={index}>
                            <div className="news__header">
                                <img src={urlToImage} alt="/" />
                            </div>
                            <div className="news__body">
                                <h3 className="news__title"><a href={url}>{title}</a></h3>
                            </div>
                        </div>
                })
            }
        </div>
    )
}

export default News