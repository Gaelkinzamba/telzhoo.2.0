const config = {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
        "x-rapidapi-key": "6b6bdab8f8msh0551cadfc4cd592p17db0cjsnad61ec4f79ed",
        "x-bingapis-sdk": "true"
    }
}

export const searchNews = async(q = 'trending news in south africa')  => {
    q = encodeURIComponent(q);
    const response = await fetch(`https://bing-news-search1.p.rapidapi.com/news/search?freshness=Day&textFormat=Raw&safeSearch=Strict&q=${q}`, config);
    const body = await response.json();
    return body.value;
}

