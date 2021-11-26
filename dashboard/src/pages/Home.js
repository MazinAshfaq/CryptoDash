import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import "./Home.css";

function Home() {
  let url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setCoins(result.data);
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="home-container">
      <div className="coin-container">
        <div className="coin-app">
          <div className="coin-search">
            <h1 className="coin-text">Search a currency</h1>
            <form>
              <input
                type="text"
                placeholder="Serach"
                className="coin-input"
                onChange={handleChange}
              />
            </form>
          </div>
          {filteredCoins.map((coin) => {
            return (
              <Coin
                key={coin.id}
                name={coin.name}
                image={coin.image}
                symbol={coin.symbol}
                volume={coin.total_volume}
                price={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                marketcap={coin.market_cap}
              />
            );
          })}
        </div>
      </div>
      {/* Outside of Coin Container */}
      <div className="second-item">
        <p>Hello</p>
      </div>
    </div>
  );
}
export default Home;
