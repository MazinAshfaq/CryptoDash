import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Chart from "../components/Chart";
import CoinData from "../components/CoinData";
import axios from "axios";

const CoinPage = () => {
  // const { id } = useParams();
  const [coinData, setCoinData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  let id = "bitcoin";

  const formatData = (data) => {
    return data.map((el) => {
      return {
        t: el[0],
        y: el[1].toFixed(2),
      };
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const [day, week, year, detail] = await Promise.all([
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart/`,
          {
            params: {
              vs_currency: "usd",
              days: "1",
            },
          }
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart/`,
          {
            params: {
              vs_currency: "usd",
              days: "7",
            },
          }
        ),
        axios.get(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart/`,
          {
            params: {
              vs_currency: "usd",
              days: "365",
            },
          }
        ),
        axios.get("https://api.coingecko.com/api/v3/coins/markets/", {
          params: {
            vs_currency: "usd",
            ids: id,
          },
        }),
      ]);
      console.log(day);

      setCoinData({
        day: formatData(day.data.prices),
        week: formatData(week.data.prices),
        year: formatData(year.data.prices),
        detail: detail.data[0],
      });
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const renderData = () => {
    if (isLoading) {
      return <div>Loading....</div>;
    }
    return (
      <div className="coinPage">
        <Chart data={coinData} />
        <CoinData data={coinData.detail} />
      </div>
    );
  };
  return renderData();
};

export default CoinPage;
