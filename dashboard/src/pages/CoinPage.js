import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinData from "../components/CoinData";
import CoinChart from "../components/CoinChart";
import axios from "axios";
import "./CoinPage.css";

const CoinPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // let daysAPI = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`;
  // let weekAPI = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`;
  // let yearAPI = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`;
  // let detailAPI = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`;

  // let getDay = axios.get(daysAPI);
  // let getWeek = axios.get(weekAPI);
  // let getYear = axios.get(yearAPI);
  // let getDetail = axios.get(detailAPI);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        x: new Date(el[0]),
        y: el[1].toFixed(2),
      };
    });
  };

  const fetchData = async () => {
    let endpoints = [
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`,
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`,
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`,
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`,
    ];

    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([{ data: day }, { data: week }, { data: year }, { data: detail }]) => {
        console.log({ day, week, year, detail });
        setCoinData({
          day: formatData(day.prices),
          week: formatData(week.prices),
          year: formatData(year.prices),
          detail: detail[0],
        });
      }
    );
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="coinPage">
        <div className="grid">
          <div className="NPContainer">
            <img src={coinData.detail.image} className="coinImg"></img>
            <h1>{coinData.detail.name}</h1>
          </div>
          <div className="OCContainer">
            <h1>Temp</h1>
          </div>

          <div className="GContainer">
            <CoinChart data={coinData} />
          </div>
          <div className="DContainer">
            <CoinData data={coinData.detail} />
          </div>
        </div>
      </div>
    );
  };

  return renderData();
};

export default CoinPage;
