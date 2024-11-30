import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import ApiUtils from "../api/ApiUtils";
import Config from "../api/Config";
import { Line } from "react-chartjs-2";
import {
  Button,
  Table,
  Card,
  Row,
  Col,
  Select,
  TextInput,
} from "react-materialize";
import EmpresasMexicanas from "./EmpresasMexicanas";
import Swal from "sweetalert2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

ReactModal.setAppElement("#root");
const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    maxWidth: "850px",
    width: "90%",
    maxHeight: "80vh",
    overflowY: "auto",
    padding: "20px",
    borderRadius: "12px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

const Analytics = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tickers, setTickers] = useState(["WALMEX.MX", "GMEXICOB.MX"]);
  const [days, setDays] = useState(5);
  const [investment, setInvestment] = useState(1000);
  const [modalOpen, setModalOpen] = useState(false);
  const [saveModalOpen, setSaveModalOpen] = useState(false);
  const [selectedAnalysis, setSelectedAnalysis] = useState(null);
  const [sectores, setSectores] = useState([]);
  const [sector, setSector] = useState("");
  const [empresa, setEmpresa] = useState("");

  useEffect(() => {
    const fetchSectores = async () => {
      try {
        ApiUtils(
          Config.Sectores.Obtener,
          (response) => setSectores(response),
          () => setError("Error al obtener los sectores.")
        );
      } catch (err) {
        console.error("Error al obtener sectores:", err);
      }
    };

    fetchSectores();
  }, []);

  const handleGeneratePredictions = async () => {
    setLoading(true);
    setError("");
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
        () => {
          setError("Error al generar predicciones.");
        },
        null,
        () => {
          setLoading(false);
        }
      );
    } catch (err) {
      setError("Error al realizar la solicitud.");
      setLoading(false);
    }
  };

  const handleSaveAnalysis = (analysis) => {
    setSelectedAnalysis(analysis);
    setSaveModalOpen(true);
  };

  const saveAnalysisToDatabase = async () => {
    if (!sector || !empresa) {
      Swal.fire(
        "Error",
        "Selecciona un sector e ingresa el nombre de la empresa.",
        "error"
      );
      return;
    }

    const service = {
      ...Config.Usuario.GuardarAnalisis,
      data: {
        nombre_empresa: empresa,
        ticker: selectedAnalysis.ticker,
        id_tipo_sector: sector,
        precio_actual: selectedAnalysis.lastPrice,
        predicciones: selectedAnalysis.futurePredictions,
        rendimiento: selectedAnalysis.rendimiento,
        dias_prediccion: days,
        monto_invertido: investment,
      },
    };

    ApiUtils(
      service,
      () => {
        Swal.fire(
          "Éxito",
          "El análisis ha sido guardado exitosamente.",
          "success"
        );
        setSaveModalOpen(false);
      },
      () => Swal.fire("Error", "No se pudo guardar el análisis.", "error")
    );
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
          borderColor: "rgba(75, 192, 192, 1)",
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
      <Card className="input-card">
        <h4 style={{ textAlign: "center" }}>
          Simulador del Mercado de Acciones Mexicano
        </h4>
        <Row>
          <Col s={12} m={4}>
            <TextInput
              label="Tickers (separados por coma)"
              value={tickers.join(",")}
              onChange={(e) => setTickers(e.target.value.split(","))}
              placeholder="Ej: WALMEX.MX, GMEXICOB.MX"
            />
          </Col>
          <Col s={12} m={4}>
            <TextInput
              label="Días de predicción"
              type="number"
              value={days}
              onChange={(e) => setDays(Number(e.target.value))}
              placeholder="Ej: 5"
            />
          </Col>
          <Col s={12} m={4}>
            <TextInput
              label="Cantidad a invertir ($)"
              type="number"
              value={investment}
              onChange={(e) => setInvestment(Number(e.target.value))}
              placeholder="Ej: 1000"
            />
          </Col>
        </Row>
        <Row>
          <Col s={12} className="center-align">
            <Button
              className="blue darken-2"
              waves="light"
              onClick={handleGeneratePredictions}
              disabled={loading}
              style={{ marginRight: "10px" }}
            >
              {loading ? "Generando..." : "Generar Predicciones"}
            </Button>
            <Button
              className="grey darken-1"
              waves="light"
              onClick={() => setModalOpen(true)}
            >
              Ver Empresas
            </Button>
            <ReactModal
              isOpen={modalOpen}
              onRequestClose={() => setModalOpen(false)}
              style={modalStyles}
              contentLabel="Empresas Mexicanas"
            >
              <EmpresasMexicanas />
              <Button
                className="red darken-2"
                onClick={() => setModalOpen(false)}
                style={{ marginTop: "10px" }}
              >
                Cerrar
              </Button>
            </ReactModal>
          </Col>
        </Row>
      </Card>

      {error && <p className="error-message">{error}</p>}

      {data &&
        data.map((analysis, index) => (
          <Card key={index} className="prediction-card">
            <h5>{analysis.ticker}</h5>
            {renderExplanation(analysis.rendimiento)}
            {renderChart(analysis.futurePredictions, analysis.ticker)}
            {renderTable(analysis.futurePredictions)}
            <Button
              className="green darken-2"
              onClick={() => handleSaveAnalysis(analysis)}
              style={{ marginTop: "10px" }}
            >
              Guardar Análisis
            </Button>
          </Card>
        ))}

      <ReactModal
        isOpen={saveModalOpen}
        onRequestClose={() => setSaveModalOpen(false)}
        style={modalStyles}
      >
        <h5>Guardar Análisis</h5>
        <Select
          label="Selecciona un Sector"
          value={sector}
          onChange={(e) => setSector(e.target.value)}
        >
          <option value="" disabled>
            Seleccionar...
          </option>
          {sectores.map((sec) => (
            <option key={sec.id_tipo_sector} value={sec.id_tipo_sector}>
              {sec.nombre_tipo_sector}
            </option>
          ))}
        </Select>
        <TextInput
          label="Nombre de la Empresa"
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
        />
        <Button className="green darken-2" onClick={saveAnalysisToDatabase}>
          Guardar
        </Button>
      </ReactModal>
    </div>
  );
};

export default Analytics;
