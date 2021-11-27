import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  let url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  useEffect(() => {
    axios.get(url).then((result) => {
      // setCoins(result.data);
      console.log(result.data);
    });
  });

  return (
    <>
      <div className="home">
        <p>Home Page</p>
      </div>
    </>
  );
}

export default Home;
