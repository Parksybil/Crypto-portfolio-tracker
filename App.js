// App.js
import React, { useState, useEffect } from 'react';
import CryptoSolarSystem from './components/CryptoSolarSystem';

const App = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    // Fetch token data from CoinGecko API
    const fetchPortfolio = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,pepe,ether-fi,wormhole,zksync&vs_currencies=usd');
        const data = await response.json();
        setPortfolio([
          { name: 'Bitcoin', amount: 20, price: data.bitcoin?.usd || 0 },
          { name: 'Ethereum', amount: 140, price: data.ethereum?.usd || 0 },
          { name: 'Pepe', amount: 100000000000, price: data.pepe?.usd || 0 },
          { name: 'Ether-fi', amount: 40000, price: data['ether-fi']?.usd || 0 },
          { name: 'Wormhole', amount: 400000, price: data.wormhole?.usd || 0 },
          { name: 'zkSync', amount: 350000, price: data.zksync?.usd || 0 }
        ]);
      } catch (error) {
        console.error("Error fetching portfolio data:", error);
      }
    };
    fetchPortfolio();
  }, []);

  return (
    <div>
      <CryptoSolarSystem portfolio={portfolio} />
    </div>
  );
};

export default App;

