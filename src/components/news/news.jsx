import React from "react";
// import axios from 'axios';

import "./news.css";

async function searchNews(q = "trending news in south africa") {
  // console.log( "Query for news: " + q );
  q = encodeURIComponent(q);
  const response = await fetch(
    `https://bing-news-search1.p.rapidapi.com/news/search?q=${q}&safeSearch=Off&textFormat=Raw&freshness=Day`,
    {
      method: "GET",
      headers: {
        "x-bingapis-sdk": "true",
        "x-rapidapi-key": "c4107ec3femsh8c754d5a06c5866p1500b6jsn7a63942b4e5e",
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      },
    }
  );
  const body = await response.json();
  // console.log(body.value); //
  // console.log("search news  body");
  return body.value;
}

const NewsAPI = (props) => {
  // console.log( "hello world", props );
  const [query, setQ] = React.useState(props.query);
  const [news, setNews] = React.useState([]);

  React.useEffect(
    () => {
      // setQ( props.query );
      // console.log( "hello world in effect hook: " + props.query );
      searchNews(props.query).then(setNews);
    },
    [props.query] // this is used to stop the infinite loop of useEffect
  );

  return (
    <div className="news_container">
      <h2>Trending News</h2>

      <div className="result_news">
        <ul>
          {" "}
          {news != undefined &&
            news.map((item) => (
              <li key={item.datePublished}>
                <a href={item.url} target="_blank">
                  <img
                    src={
                      item.image === undefined
                        ? ""
                        : item.image.thumbnail.contentUrl
                    }
                    height="auto"
                  />{" "}
                  <i> {item.name} </i>
                </a>
              </li>
            ))}{" "}
        </ul>
      </div>
    </div>
  );
};

export default NewsAPI;
