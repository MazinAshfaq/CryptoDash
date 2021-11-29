import React from "react";
import "./Coin.css";

const coin = ({ name, image, symbol, price, volume, priceChange }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">
            <b>Price: </b> ${price.toLocaleString()}
          </p>
          <p className="coin-volume">
            <b>Volume: </b> ${volume.toLocaleString()}
          </p>
          <p>
            <b>% Change</b>

            {priceChange < 0 ? (
              <p className="coin-percent red"> {priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin-percent green"> {priceChange.toFixed(2)}%</p>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default coin;
