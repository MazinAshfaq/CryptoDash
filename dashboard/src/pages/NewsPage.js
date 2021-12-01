import React from "react";
import News from "../components/News";
import "./NewsPage.css";
const NewsPage = () => {
  return (
    <div className="Page">
      <div className="NewsPage">
        <h1>Crypto News</h1>
        <News />
      </div>
    </div>
  );
};

export default NewsPage;
