import React, { useState, useEffect } from "react";
import CoinsTable from "./CoinsTable";
import { Divider } from "@mui/material";
import axios from "axios";

function Coins() {
  const [coins, setCoins] = useState([]);

  //Fetch the list of coins from the Node.js server using the /coins endpoint.

  useEffect(() => {
    axios
      .get("http://localhost:5000/coins")
      .then((response) => {
        setCoins(response.data);
        console.log(coins)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <Divider />
      <CoinsTable coins={coins} />
      
    </>
  );
}

export default Coins;
