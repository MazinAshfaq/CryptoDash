import React, { useState, useEffect } from "react";
import axios from "axios";
import Coin from "./Coin";
import "./Home.css";
import ReactPaginate from "react-paginate";
import coin from "./Coin";

function Home() {
  let url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

  // Coins
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const coinsPerPage = 6;
  const pagesVisited = pageNumber * coinsPerPage;

  // Fetch Coin Data
  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setCoins(result.data);
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

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
      <div className="coin-container">
        <div className="coin-app">
          <div className="coin-search">
            <form>
              <input
                type="text"
                placeholder="Serach"
                className="coin-input"
                onChange={handleChange}
              />
            </form>
          </div>
          {/* {filteredCoins.map((coin) => {})} */}
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
      {/* Outside of Coin Container */}
      <div className="second-item-container">
        <div className="second-item">
          <p>Hello</p>
        </div>
      </div>
    </div>
  );
}
export default Home;
