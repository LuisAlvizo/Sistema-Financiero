import React, { useState, useEffect } from "react";
import ApiUtils from "../api/ApiUtils";
import Config from "../api/Config";
import { Card, Row, Col } from "react-materialize";
import { Chart } from "react-google-charts";
import "../CSS/Dashboard.css";

const Dashboard = () => {
  const [gastos, setGastos] = useState([]);
  const [ingresos, setIngresos] = useState([]);
  const [deudas, setDeudas] = useState([]);
  const [mesSeleccionado, setMesSeleccionado] = useState(
    new Date().toISOString().slice(0, 7)
  );

  useEffect(() => {
    const fetchData = async () => {
      ApiUtils(Config.Gastos.Obtener, (data) => setGastos(data.gastos));
      ApiUtils(Config.Ingresos.Obtener, (data) => setIngresos(data.ingresos));
      ApiUtils(Config.Deudas.Listar, (data) => setDeudas(data));
    };
    fetchData();
  }, []);

  const gastosMes = gastos.filter((g) =>
    g.fecha_gasto.startsWith(mesSeleccionado)
  );
  const ingresosMes = ingresos.filter((i) =>
    i.fecha_ingreso.startsWith(mesSeleccionado)
  );
  const deudasMes = deudas.filter((d) =>
    d.fecha_inicio.startsWith(mesSeleccionado)
  );

  const totalGastos = gastosMes.reduce(
    (acc, curr) => acc + parseFloat(curr.monto),
    0
  );
  const totalIngresos = ingresosMes.reduce(
    (acc, curr) => acc + parseFloat(curr.monto),
    0
  );
  const totalDeudas = deudasMes.reduce(
    (acc, curr) => acc + parseFloat(curr.monto),
    0
  );
  const balance = totalIngresos - totalGastos;

  const combinedData = [
    ["Categoría", "Monto", { role: "style" }],
    ["Gastos", totalGastos, "red"],
    ["Ingresos", totalIngresos, "green"],
    ["Deudas", totalDeudas, "blue"],
  ];

  return (
    <div className="dashboard-container">
      <Row>
        <Col s={12} className="center-align">
          <h4>Dashboard Financiero</h4>
          <input
            type="month"
            value={mesSeleccionado}
            onChange={(e) => setMesSeleccionado(e.target.value)}
          />
        </Col>
      </Row>

      {/* Gráfico combinado */}
      <Row>
        <Col s={12}>
          <Card>
            <h5>Resumen General</h5>
            {totalGastos || totalIngresos || totalDeudas ? (
              <Chart
                chartType="ColumnChart"
                data={combinedData}
                options={{
                  title: "Comparación de Gastos, Ingresos y Deudas",
                  legend: { position: "none" },
                  hAxis: { title: "Monto ($)" },
                  vAxis: { title: "Categorías" },
                  colors: ["red", "green", "blue"],
                }}
                width={"100%"}
                height={"400px"}
              />
            ) : (
              <p className="center-align">No hay datos disponibles para este mes.</p>
            )}
          </Card>
        </Col>
      </Row>

      {/* Cuadros de resumen */}
      <Row>
        <Col s={12} m={6}>
          <Card
            className={`balance-card ${
              balance >= 0 ? "positive" : "negative"
            }`}
          >
            <h5>{balance >= 0 ? "Ganancias del Mes" : "Pérdidas del Mes"}</h5>
            <p>${balance.toFixed(2)}</p>
          </Card>
        </Col>
        <Col s={12} m={6}>
        <Card
            className={`balance-card`}
          >
            <h5>Deudas Totales</h5>
            <p>${totalDeudas.toFixed(2)}</p>
          </Card>
        </Col>
      </Row>

      {/* Gráficos y tablas detalladas */}
      <Row>
        <Col s={12} m={6} l={4}>
          <Card>
            <h5>Gastos</h5>
            <p>Total: ${totalGastos.toFixed(2)}</p>
            {gastosMes.length ? (
              <Chart
                chartType="PieChart"
                data={[
                  ["Categoría", "Monto"],
                  ...gastosMes.map((g) => [
                    g.nombre_tipo_gasto,
                    parseFloat(g.monto),
                  ]),
                ]}
                options={{
                  title: "Distribución de Gastos por Tipo",
                  pieHole: 0.4,
                  colors: ["#ff6f61", "#ff8567", "#ff9e6d", "#ffb773"],
                }}
                width={"100%"}
                height={"300px"}
              />
            ) : (
              <p className="center-align">No hay gastos para este mes.</p>
            )}
          </Card>
        </Col>

        <Col s={12} m={6} l={4}>
          <Card>
            <h5>Ingresos</h5>
            <p>Total: ${totalIngresos.toFixed(2)}</p>
            {ingresosMes.length ? (
              <Chart
                chartType="BarChart"
                data={[
                  ["Fuente", "Monto", { role: "style" }],
                  ...ingresosMes.map((i) => [
                    i.nombre_tipo_ingreso,
                    parseFloat(i.monto),
                    "green",
                  ]),
                ]}
                options={{
                  title: "Fuentes de Ingresos por Tipo",
                  legend: { position: "none" },
                  colors: ["#4caf50"],
                }}
                width={"100%"}
                height={"300px"}
              />
            ) : (
              <p className="center-align">No hay ingresos para este mes.</p>
            )}
          </Card>
        </Col>

        <Col s={12} m={6} l={4}>
          <Card>
            <h5>Deudas</h5>
            <p>Total: ${totalDeudas.toFixed(2)}</p>
            {deudasMes.length ? (
              <Chart
                chartType="ColumnChart"
                data={[
                  ["Acreedor", "Monto", { role: "style" }],
                  ...deudasMes.map((d) => [d.acreedor, parseFloat(d.monto), "blue"]),
                ]}
                options={{
                  title: "Deudas por Acreedor",
                  legend: { position: "none" },
                  colors: ["#2196f3"],
                }}
                width={"100%"}
                height={"300px"}
              />
            ) : (
              <p className="center-align">No hay deudas para este mes.</p>
            )}
          </Card>
        </Col>
      </Row>

      {/* Tablas separadas */}
      <Row>
        <Col s={12} m={6}>
          <Card>
            <h5>Tabla de Gastos</h5>
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Descripción</th>
                  <th>Tipo</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {gastosMes.map((g, idx) => (
                  <tr key={idx}>
                    <td>{new Date(g.fecha_gasto).toLocaleDateString()}</td>
                    <td>{g.descripcion}</td>
                    <td>{g.nombre_tipo_gasto}</td>
                    <td>${parseFloat(g.monto).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </Col>

        <Col s={12} m={6}>
          <Card>
            <h5>Tabla de Ingresos</h5>
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Descripción</th>
                  <th>Tipo</th>
                  <th>Monto</th>
                </tr>
              </thead>
              <tbody>
                {ingresosMes.map((i, idx) => (
                  <tr key={idx}>
                    <td>{new Date(i.fecha_ingreso).toLocaleDateString()}</td>
                    <td>{i.descripcion}</td>
                    <td>{i.nombre_tipo_ingreso}</td>
                    <td>${parseFloat(i.monto).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </Col>

        <Col s={12}>
          <Card>
            <h5>Tabla de Deudas</h5>
            <table>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Acreedor</th>
                  <th>Descripción</th>
                  <th>Monto</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {deudasMes.map((d, idx) => (
                  <tr key={idx}>
                    <td>{new Date(d.fecha_inicio).toLocaleDateString()}</td>
                    <td>{d.acreedor}</td>
                    <td>{d.descripcion}</td>
                    <td>${parseFloat(d.monto).toFixed(2)}</td>
                    <td>{d.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
