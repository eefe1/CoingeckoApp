import React, { useState, useEffect } from 'react';
import CoinsTable from './CoinsTable';
import {Divider} from "@mui/material";



function Coins() {
  const [coins, setCoins] = useState([]);

//Fetch the list of coins from the Node.js server using the /coins endpoint.

useEffect(() => {
  fetch('http://localhost:5000/coins')
    .then(response => response.json())
    .then(data => setCoins(data))
    .catch(error => console.log(error));
}, []);

  return (
    <>
      <Divider/>
      <CoinsTable coins={coins}/>
      </>
  );
}

export default Coins;