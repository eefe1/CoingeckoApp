import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const CoinDetails = () => {
  const { id } = useParams();

  const [coinDetails, setCoinDetails] = useState({});
  useEffect(() => {
    const fetchCoinDetails = async () => {
      const response = await axios.get(`/coins/${id}`);
      setCoinDetails(response.data);
      console.log(coinDetails)
    };

    fetchCoinDetails();
  }, []);

  return (
    <div>
      <h2>{coinDetails.name}</h2>
      <p>Symbol: {coinDetails?.symbol}</p>
      <p>Current Price: {coinDetails.current_price}</p>
      <p>Market Cap: {coinDetails.market_cap}</p>
      {/* add more details as needed */}
    </div>
  );
};

export default CoinDetails;
