
  import React, { useState } from 'react';
  import ApiUtils from '../api/ApiUtils';
  import Config from '../api/Config';
  import { Line } from 'react-chartjs-2';
  import { Button, Table, Card, Row, Col } from 'react-materialize';
  
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
    const [investment, setInvestment] = useState(1000); // Cantidad de inversión predeterminada
  
    const handleGeneratePredictions = async () => {
      setLoading(true);
      setError('');
      setData(null);
  
      const service = {
        ...Config.Usuario.Recomendaciones,
        headers: Config.Usuario.Recomendaciones.headers(),
        data: { tickers, days, investment },
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
          <h6>Gráfico de Predicciones: {ticker}</h6>
          <Line data={chartData} />
        </div>
      );
    };
  
    const renderTable = (predictions) => (
      <Table>
        <thead>
          <tr>
            <th>Día</th>
            <th>Fecha</th>
            <th>Precio</th>
            <th>Valor de la Inversión</th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((p, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{p.date}</td>
              <td>${p.price.toFixed(2)}</td>
              <td>${Number(p.investmentValue).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  
    const renderExplanation = (rendimiento) => (
      <div className="explanation">
        <p>
          <strong>Rendimiento estimado:</strong> {rendimiento.toFixed(2)}%
        </p>
      </div>
    );
  
    return (
      <div className="analytics-container">
        <h4>Analytics</h4>
        <Card className="input-card">
          <Row>
            <Col s={12} m={4}>
              <label>
                <strong>Tickers (separados por coma):</strong>
                <input
                  type="text"
                  value={tickers.join(',')}
                  onChange={(e) => setTickers(e.target.value.split(','))}
                />
              </label>
            </Col>
            <Col s={12} m={4}>
              <label>
                <strong>Días de predicción:</strong>
                <input
                  type="number"
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  min="1"
                />
              </label>
            </Col>
            <Col s={12} m={4}>
              <label>
                <strong>Cantidad a invertir ($):</strong>
                <input
                  type="number"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  min="1"
                />
              </label>
            </Col>
          </Row>
          <Button
            className="blue darken-2"
            waves="light"
            onClick={handleGeneratePredictions}
            disabled={loading}
          >
            {loading ? 'Generando...' : 'Generar Predicciones'}
          </Button>
        </Card>
        {error && <p className="error-message">{error}</p>}
        {data &&
          data.map((item, index) => (
            <Card key={index} className="prediction-card">
              <h5>{item.ticker}</h5>
              {renderExplanation(item.rendimiento)}
              {renderChart(item.futurePredictions, item.ticker)}
              {renderTable(item.futurePredictions)}
            </Card>
          ))}
      </div>
    );
  };
  
  export default Analytics;
  