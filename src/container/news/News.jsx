import React from 'react';
import { newsApi } from '../../utils/newsApi';
import LatestNews from '../../components/latestNews/LatestNews';
import './News.css'

const News = () => {
    return (
        <div className="news-container">
            <div className="news-topic">
                <ul className="topics-list">
                    <li className="topic">All</li>
                    <li className="topic">Art</li>
                    <li className="topic">Bussiness</li>
                    <li className="topic">Enternaiment</li>
                    <li className="topic">Health</li>
                    <li className="topic">Living</li>
                    <li className="topic">Lifestyle</li>
                    <li className="topic">Science</li>
                    <li className="topic">Sports</li>
                    <li className="topic">Travel</li>
                    <li className="topic">Technology</li>
                </ul>
            </div>
            <div className="news-section">
                {
                    newsApi.map((news, index) => {

                    return  <LatestNews key={index} news={news} />
                    })
                }
            </div>
        </div>
    )
}

// export default News