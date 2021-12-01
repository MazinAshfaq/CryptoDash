import React from "react";
import "./TradingList.css";

const TradingList = ({ name, image, url }) => {
  return (
    <div className="tcoin-container">
      <div className="tcoin-row">
        <div className="tcoin">
          <img src={image} alt="crypto" />
          <h1>{name}</h1>
        </div>
        <div className="tcoin-data">
          <p className="tcoin-url">
            <a href={url}>{url}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TradingList;
