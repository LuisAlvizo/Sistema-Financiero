import React, { useState, useEffect } from "react";
import { Card, Button, TextInput, Row, Col } from "react-materialize";
import { Pagination } from "@mui/material"; 
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import { Line } from "react-chartjs-2";
import ApiUtils from "../api/ApiUtils";
import Config from "../api/Config";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SavedAnalysis = () => {
  const [analisis, setAnalisis] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchSavedAnalysis = async (page = 1, query = "") => {
    setLoading(true);
    setError("");

    const service = {
      method: "GET",
      url: `${Config.Usuario.AnalisisGuardados.url}?page=${page}&limit=3&search=${query}`,
      headers: Config.Usuario.AnalisisGuardados.headers(),
    };

    try {
      ApiUtils(
        service,
        (response) => {
          setAnalisis(response.data);
          setCurrentPage(response.pagination.currentPage);
          setTotalPages(response.pagination.totalPages);
        },
        () => setError("Error al obtener los análisis guardados."),
        null,
        () => setLoading(false)
      );
    } catch (err) {
      setError("Error al realizar la solicitud.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSavedAnalysis();
  }, []);

  const handleSearch = () => {
    fetchSavedAnalysis(1, search);
  };

  const handlePageChange = (_, page) => {
    fetchSavedAnalysis(page, search);
  };

  const renderChart = (predicciones, ticker) => {
    const labels = predicciones.map((p) => p.date);
    const prices = predicciones.map((p) => p.price);

    const chartData = {
      labels,
      datasets: [
        {
          label: `Predicción: ${ticker}`,
          data: prices,
          fill: false,
          borderColor: "rgba(75, 192, 192, 1)",
          tension: 0.2,
        },
      ],
    };

    return <Line data={chartData} options={{ maintainAspectRatio: false }} />;
  };

  return (
    <div className="saved-analysis-container" style={{ textAlign: "center", padding: "20px" }}>
      <Card style={{ padding: "20px" }}>
        <h4 style={{ textAlign: "center" }}>Análisis Guardados</h4>
        <Row>
          <Col s={12} style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
            <TextInput
              label="Buscar por nombre o ticker"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Ej: Walmart o WALMEX.MX"
              style={{ width: "70%" }}
            />
          </Col>
          <Col s={12} className="center-align">
            <Button className="blue darken-2" onClick={handleSearch} style={{ marginBottom: "20px" }}>
              Buscar
            </Button>
          </Col>
        </Row>

        {loading ? (
          <p style={{ textAlign: "center" }}>Cargando análisis...</p>
        ) : error ? (
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
        ) : analisis.length === 0 ? (
          <p style={{ textAlign: "center" }}>No se encontraron análisis guardados.</p>
        ) : (
          <>
            {analisis.map((item) => (
              <Card key={item.id_accion} className="hoverable" style={{ marginBottom: "20px" }}>
                <h5>{item.nombre_empresa}</h5>
                <p>
                  <strong>Ticker:</strong> {item.ticker}
                  <br />
                  <strong>Sector:</strong> {item.nombre_tipo_sector}
                  <br />
                  <strong>Precio:</strong> ${item.precio_actual}
                  <br />
                  <strong>Rendimiento:</strong> {item.rendimiento}%
                </p>
                <div style={{ height: "400px" }}>{renderChart(item.predicciones, item.ticker)}</div>
              </Card>
            ))}
            <Row>
              <Col s={12} style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                <Pagination
                  count={totalPages}
                  page={currentPage}
                  onChange={handlePageChange}
                  variant="outlined"
                  shape="rounded"
                  color="primary"
                  style={{ backgroundColor: "#fff", padding: "10px", borderRadius: "5px" }}
                />
              </Col>
            </Row>
          </>
        )}
      </Card>
    </div>
  );
};

export default SavedAnalysis;
