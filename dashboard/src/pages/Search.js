import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import axios from "axios";
import "./Search.css";

function Search() {
  let url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setCoins(result.data);
        // console.log(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="search-page">
      {/* <h1>Search for a Crypto</h1> */}
      <SearchBar placeholder="Enter Crypto Name" data={coins} key={coins.id} />
    </div>
  );
}

export default Search;
