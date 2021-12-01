import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import "./Home.css";
import ReactPaginate from "react-paginate";
import News from "../components/News";
import CoinChart from "../components/CoinChart";

function Home() {
  let url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

  // Coins
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [chartData, setChartData] = useState({});

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const coinsPerPage = 10;
  const pagesVisited = pageNumber * coinsPerPage;

  //Format Chartdata
  const formatData = (data) => {
    return data.map((el) => {
      return {
        x: new Date(el[0]),
        y: el[1].toFixed(2),
      };
    });
  };

  // Fetch Coin Data
  const fetchData = async () => {
    let endpoints = [
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1`,
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7`,
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=365`,
    ];

    await Promise.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      ([{ data: btcday }, { data: btcweek }, { data: btcyear }]) => {
        setChartData({
          day: formatData(btcday.prices),
          week: formatData(btcweek.prices),
          year: formatData(btcyear.prices),
        });
      }
    );
  };

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setCoins(result.data);
        console.log(result.data);
      })
      .catch((error) => console.log(error));
    fetchData();
  }, []);

  // Update page as search is comencsed
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  // Lowercases everything
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  // Display home chart
  const displayChart = {};

  // Displays all coins with pagination
  const displayCoins = filteredCoins
    .slice(pagesVisited, pagesVisited + coinsPerPage)
    .map((coin) => {
      return (
        <Coin
          key={coin.id}
          id={coin.id}
          name={coin.name}
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.total_volume}
          price={coin.current_price}
          priceChange={coin.price_change_percentage_24h}
        />
      );
    });

  // Page number logic
  const pageCount = Math.ceil(coins.length / coinsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="home-container">
      <div className="home-grid">
        <div className="home-coin-container">
          <h1>List of Cryptos</h1>
          <div className="coin-search">
            <form>
              <input
                type="text"
                placeholder="Search"
                className="coin-input"
                onChange={handleChange}
              />
            </form>
          </div>
          <div className="coin-app">
            {displayCoins}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinksClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
        <div className="graph-item-container">
          <CoinChart data={chartData} />
          <h3>Bitcoin Prices</h3>
        </div>
        <div className="news-item-container">
          <h1>News Articles for Cryptos</h1>
          <News />
        </div>
      </div>
    </div>
  );
}
export default Home;
