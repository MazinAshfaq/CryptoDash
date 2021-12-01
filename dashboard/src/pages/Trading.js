import React, { useState, useEffect } from "react";
import axios from "axios";
import TradingList from "../components/TradingList";
import "./Trading.css";
import ReactPaginate from "react-paginate";
const Trading = () => {
  let url = "https://api.coingecko.com/api/v3/exchanges?per_page=250";
  const [coinData, setCoinData] = useState([]);
  const [search, setSearch] = useState("");

  // Pagination
  const [pageNumber, setPageNumber] = useState(0);
  const coinsPerPage = 10;
  const pagesVisited = pageNumber * coinsPerPage;

  // Page number logic
  const pageCount = Math.ceil(coinData.length / coinsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Lowercases everything
  const filteredCoins = coinData.filter((coinData) =>
    coinData.name.toLowerCase().includes(search.toLowerCase())
  );

  // Update page as search is comencsed
  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const fetchData = async () => {
    await axios
      .get(url)
      .then((result) => {
        setCoinData(result.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayCoins = filteredCoins
    .slice(pagesVisited, pagesVisited + coinsPerPage)
    .map((coin) => {
      return <TradingList name={coin.name} image={coin.image} url={coin.url} />;
    });

  return (
    <div className="tGrid">
      <div className="tList">
        <div className="tcoinCointainer">
          <h1>Where to Exchange Coins</h1>
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
    </div>
  );
};

export default Trading;
