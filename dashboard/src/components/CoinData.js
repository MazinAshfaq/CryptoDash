import React from "react";
import "../pages/CoinPage.css";

function formatNum(numb) {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
}

const CoinData = ({ data }) => {
  return (
    <div>
      <h2>Details</h2>
      <ul>
        <li>
          <b>Name:</b> {data.name}
        </li>
        <li>
          <b>Current Price:</b> ${formatNum(data.current_price)}
        </li>
        <li>
          <b>Marketcap:</b> ${formatNum(data.market_cap)}
        </li>
        <li>
          <b>Marketcap Rank:</b> #{data.market_cap_rank}
        </li>
        <li>
          <b>Circulating:</b> {formatNum(data.circulating_supply)}
        </li>
        <li>
          <b>24 Hour Change:</b> ${formatNum(data.price_change_24h.toFixed(2))}
        </li>
        <li>
          <b>24 Hour High:</b> ${formatNum(data.high_24h)}
        </li>
        <li>
          <b>24 Hour Low:</b> ${formatNum(data.low_24h)}
        </li>
      </ul>
    </div>
  );
};

export default CoinData;
