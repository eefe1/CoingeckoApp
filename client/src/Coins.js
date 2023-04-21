import React, { useState, useEffect } from 'react';
//import { styled } from '@mui/system';
import CoinsTable from './components/CoinsTable';
/* const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
}); */



function Coins() {
  const [coins, setCoins] = useState([]);

//Fetch the list of coins from the Node.js server using the /coins endpoint.

useEffect(() => {
  fetch('/coins')
    .then(response => response.json())
    .then(data => setCoins(data));
}, []);

  return (
    <div>
      <h1>Coins</h1>
      <CoinsTable/>
      <ul>
        {coins.map(coin => (
          <li key={coin.id}>
            {coin.name} ({coin.symbol.toUpperCase()})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Coins;