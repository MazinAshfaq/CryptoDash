import React, { useState, useEffect } from "react";
import axios from "axios";

function News() {
  const options = {
    method: "GET",
    url: "https://crypto-news6.p.rapidapi.com/news",
    headers: {
      "x-rapidapi-host": "crypto-news6.p.rapidapi.com",
      "x-rapidapi-key": "0c9f8be7c6msh9afb1de4fbfd558p1e676ajsn515e4a080993",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  return <div className="news"></div>;
}

export default News;
