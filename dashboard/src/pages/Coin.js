import React from "react";
import { Link } from "react-router-dom";
import "./Coin.css";

const coin = ({
  id,
  name,
  image,
  symbol,
  price,
  volume,
  priceChange,
  curr,
}) => {
  const formatCurr = () => {
    switch (curr) {
      case "CAD":
        return "C$";
      case "AED":
        return "د.إ";
      case "CHF":
        return "CHF";
      case "EUR":
        return "€";
      case "GBP":
        return "£";
      case "KWD":
        return "د.ك";
      default:
        return "$";
    }
  };
  return (
    <Link to={`./CoinPage/${id}`} className="link">
      <div className="coin-container">
        <div className="coin-row">
          <div className="coin">
            <img src={image} alt="crypto" />
            <h1>{name}</h1>
            <p className="coin-symbol">{symbol}</p>
          </div>
          <div className="coin-data">
            <p className="coin-price">
              <b>Price: </b> {formatCurr()}
              {price.toLocaleString()}
            </p>
            <p className="coin-volume">
              <b>Volume: </b> {formatCurr()}
              {volume.toLocaleString()}
            </p>
            <span>
              <b>% Change</b>

              {priceChange < 0 ? (
                <p className="coin-percent red"> {priceChange.toFixed(2)}%</p>
              ) : (
                <p className="coin-percent green"> {priceChange.toFixed(2)}%</p>
              )}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default coin;
