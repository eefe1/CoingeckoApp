import React, { useState, useEffect } from 'react';



function Coins() {
  const [coins, setCoins] = useState([]);
  
//Fetch the list of coins from the Node.js server using the /coins endpoint.

  useEffect(() => {
    fetch('http://localhost:5000/coins')
      .then(response => response.json())
      .then(data => setCoins(data));
  }, []);

  return (
    <div>
      <h1>Coins</h1>
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