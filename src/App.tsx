import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Cryptosummary from './components/Cryptosummary';
import { Crypto } from './Types';

function App() {
  const [cryptos, setCryptos] = useState<Crypto[] | null>();
  useEffect(() => {
    const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";
      axios.get(url).then((response) => {
        setCryptos(response.data);
      })
  }, []) // use empty dependency to execute on a page load
  
  return (
    <div className="App">
     { cryptos ? cryptos.map((crypto) => {
      return <Cryptosummary crypto={crypto} />
     }) : null }
    </div>
  );
}

export default App;
