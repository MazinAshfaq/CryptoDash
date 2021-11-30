import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinData from "../components/CoinData";
import CoinChart from "../components/CoinChart";
import axios from "axios";

const CoinPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  let daysAPI = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1`;
  let weekAPI = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=7`;
  let yearAPI = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=365`;
  let detailAPI = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}`;

  let getDay = axios.get(daysAPI);
  let getWeek = axios.get(weekAPI);
  let getYear = axios.get(yearAPI);
  let getDetail = axios.get(detailAPI);

  const formatData = (data) => {
    return data.map((el) => {
      return {
        x: new Date(el[0]),
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await axios.all([getDay, getWeek, getYear, getDetail]).then(
        axios.spread((...allData) => {
          let day = allData[0];
          let week = allData[1];
          let year = allData[2];
          let detail = allData[3];

          setCoinData({
            day: formatData(day.data.prices),
            week: formatData(week.data.prices),
            year: formatData(year.data.prices),
            detail: detail.data[0],
          });
        })
      );
      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(coinData);
  const renderData = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    return (
      <div className="coinPage">
        <div className="grid">
          <div className="NPContainer">
            {/* <h1>{coinData.detail.name}</h1> */}
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
