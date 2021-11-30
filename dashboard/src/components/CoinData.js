import React from "react";

const CoinData = ({ data }) => {
  console.log("inside coindata", data);
  return (
    <div>
      <h2>Details</h2>
      {/* <li>Name: {data.name}</li> */}
    </div>
  );
};

export default CoinData;
