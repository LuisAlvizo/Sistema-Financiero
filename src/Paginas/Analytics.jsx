import React, { useState } from 'react';
import ApiUtils from '../api/ApiUtils';
import Config from '../api/Config';
import { Line } from 'react-chartjs-2';
import { Button, Table } from 'react-materialize';
import '../CSS/Analytics.css'; // Importar estilos

// Registrar los componentes necesarios de Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrar componentes de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Analytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [tickers, setTickers] = useState(['WALMEX.MX', 'GMEXICOB.MX']);
  const [days, setDays] = useState(5);

  const handleGeneratePredictions = async () => {
    setLoading(true);
    setError('');
    setData(null);

    const service = {
      ...Config.Usuario.Recomendaciones,
      data: { tickers, days },
    };

    try {
      ApiUtils(
        service,
        (response) => {
          setData(response);
        },
        (err) => {
          setError('Error al generar predicciones.');
        },
        null,
        () => {
          setLoading(false);
        }
      );
    } catch (err) {
      setError('Error al realizar la solicitud.');
      setLoading(false);
    }
  };

  const renderChart = (predictions, ticker) => {
    const labels = predictions.map((p) => p.date);
    const prices = predictions.map((p) => p.price);

    const chartData = {
      labels,
      datasets: [
        {
          label: `Predicción de ${ticker}`,
          data: prices,
          fill: false,
          borderColor: 'rgba(75, 192, 192, 1)',
          tension: 0.1,
        },
      ],
    };

    return (
      <div className="chart-container">
        <h5>Gráfico de Predicciones: {ticker}</h5>
        <Line data={chartData} />
      </div>
    );
  };

  const renderTable = (predictions, ticker) => (
    <Table>
      <thead>
        <tr>
          <th>Día</th>
          <th>Fecha</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {predictions.map((p, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{p.date}</td>
            <td>${p.price.toFixed(2)}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <div className="analytics-card">
      <h4>Analytics</h4>
      <div className="form-container">
        <label>
          Tickers (separados por coma):
          <input
            type="text"
            value={tickers.join(',')}
            onChange={(e) => setTickers(e.target.value.split(','))}
          />
        </label>
        <label>
          Días de predicción:
          <input
            type="number"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            min="1"
          />
        </label>
      </div>
      <Button
        className="blue darken-2"
        waves="light"
        onClick={handleGeneratePredictions}
        disabled={loading}
      >
        {loading ? 'Generando...' : 'Generar Predicciones'}
      </Button>
      {error && <p className="error-message">{error}</p>}
      {data && (
        <div className="data-container">
          {data.map((item, index) => (
            <div key={index}>
              <h5>{item.ticker}</h5>
              <p>Rendimiento estimado: {item.rendimiento}%</p>
              {renderChart(item.futurePredictions, item.ticker)}
              {renderTable(item.futurePredictions, item.ticker)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Analytics;
