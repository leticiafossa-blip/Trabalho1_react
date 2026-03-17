import React, { useEffect, useState } from 'react';
import { getExchangeRates } from '../services/handleHospedes';

function Home() {
  const [rates, setRates] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExchangeRates()
      .then(res => {
        setRates(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="content">
      <h1>Bem-vindo ao Hotel System</h1>
      <p>Gerenciamento prático de hóspedes e quartos.</p>
      
      <div className="exchange-box">
        <h3>Cotações Atuais (Bônus)</h3>
        {loading ? <p>Carregando câmbio...</p> : rates && (
          <ul>
            <li>Dólar: R$ {parseFloat(rates.USDBRL.bid).toFixed(2)}</li>
            <li>Euro: R$ {parseFloat(rates.EURBRL.bid).toFixed(2)}</li>
            <li>Bitcoin: R$ {rates.BTCBRL.bid}</li>
          </ul>
        )}
      </div>
    </div>
  );
}
export default Home;