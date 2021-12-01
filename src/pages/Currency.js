import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import ReactPaginate from "react-paginate";
import "./Currency.css";

function Currency() {
  // Coins
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  // Pagination
  const [pageNumber, setPageNumber] = useState(0);

  const coinsPerPage = 10;
  const pagesVisited = pageNumber * coinsPerPage;

  const [curr, setCurr] = useState("USD");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=" +
          curr +
          "&order=market_cap_desc&per_page=250&page=1&sparkline=false"
      )
      .then((result) => {
        setCoins(result.data);
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  }, curr);

  // Update page as search is comencsed
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  // Lowercases everything
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

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
          curr={curr}
        />
      );
    });

  // Page number logic
  const pageCount = Math.ceil(coins.length / coinsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="currency-container">
      <div className="currency-grid">
        <div className="currency-coin-container">
          <h1>List of Cryptos</h1>
          <div className="currency-coin-search">
            <form>
              <input
                type="text"
                placeholder="Search"
                className="currency-coin-input"
                onChange={handleChange}
              />
            </form>
          </div>
          <h3>Change Currency</h3>
          <div className="options">
            <select
              className="selectTag"
              onChange={(e) => {
                setCurr(e.target.value);
              }}
            >
              <option value="USD">USD $</option>
              <option value="CAD">CAD C$</option>
              <option value="AED">AED د.إ</option>
              <option value="CHF">CHF</option>
              <option value="EUR">EUR €</option>
              <option value="GBP">GBP £</option>
              <option value="KWD">KWD د.ك</option>
            </select>
          </div>
          <div className="currency-coin-app">
            {displayCoins}
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginBttns"}
              previousLinksClassName={"prevBttn"}
              nextLinkClassName={"nxtBttn"}
              disabledClassName={"paginDisabled"}
              activeClassName={"paginActive"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Currency;
