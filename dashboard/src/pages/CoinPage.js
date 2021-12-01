import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CoinData from "../components/CoinData";
import CoinChart from "../components/CoinChart";
import axios from "axios";
import "./CoinPage.css";
import News from "../pages/News";
import SearchBar from "../components/SearchBar";

const CoinPage = () => {
  const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let page = window.location.href;

  let url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setCoins(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
            <div className="price">
              <h1>${coinData.detail.current_price.toFixed(2)}</h1>
              <h1
                className={
                  coinData.detail.price_change_24h < 0 ? "red" : "green"
                }
              >
                {coinData.detail.price_change_percentage_24h.toFixed(2)}%
              </h1>
            </div>
          </div>
          {/* <div className="SContainer">
            <SearchBar
              placeholder="Enter Crypto Name"
              data={coins}
              page={page}
            />
          </div> */}

          <div className="GContainer">
            <CoinChart data={coinData} />
          </div>
          <div className="DContainer">
            <CoinData data={coinData.detail} />
          </div>
          <div className="NContainer">
            <h2>{coinData.detail.name} News</h2>
            <News data={coinData.detail.id} />
          </div>
        </div>
      </div>
    );
  };

  return renderData();
};

export default CoinPage;
