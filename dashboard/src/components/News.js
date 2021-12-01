import React, { useState, useEffect } from "react";
import axios from "axios";
import "./News.css";

function News({}) {
  const [article, setArticle] = useState([]);

  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: "crypto",
      freshness: "Month",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "0c9f8be7c6msh9afb1de4fbfd558p1e676ajsn515e4a080993",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.value);
        setArticle(response.data.value);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const displayNews = article.map((articles) => {
    return (
      <a href={articles.url}>
        <div className="NewsContainer" key={articles.name}>
          <div className="newsImage">
            <img src={articles.image.thumbnail.contentUrl} alt="Crypto News" />
          </div>
          <div className="newsText">
            <h3>{articles.name}</h3>
            <p>{articles.description}</p>
          </div>
        </div>
      </a>
    );
  });

  return displayNews;
}

export default News;
