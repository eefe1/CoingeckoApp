import React, { useState, useEffect } from "react";
import CoinsTable from "./CoinsTable";
import { Divider, CircularProgress } from "@mui/material";

import axios from "axios";

function Coins() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  //Fetch the list of coins from the Node.js server using the /coins endpoint.

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("http://localhost:5000/coins")
      .then((response) => {
        setCoins(response.data);
        console.log(coins);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }
  return (
    <>
      <Divider />
      <CoinsTable coins={coins} />
    </>
  );
}

export default Coins;
