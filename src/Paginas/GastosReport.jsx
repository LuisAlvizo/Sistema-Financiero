import React, { useState, useEffect } from "react";
import ApiUtils from "../api/ApiUtils";
import Config from "../api/Config";
import { Table, Card } from "react-materialize";

const GastosReport = () => {
  const [gastos, setGastos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerGastos = async () => {
      const service = {
        ...Config.Gastos.Obtener,
        headers: Config.Gastos.Obtener.headers(),
      };

      try {
        ApiUtils(
          service,
          (response) => setGastos(response.gastos),
          () => setError("Error al obtener los gastos")
        );
      } catch (err) {
        setError("Error al realizar la solicitud");
      }
    };

    obtenerGastos();
  }, []);

  return (
    <Card>
      <h4>Historial de Gastos</h4>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {gastos.map((item, index) => (
            <tr key={index}>
              <td>{new Date(item.fecha_gasto).toLocaleDateString()}</td>
              <td>{item.descripcion}</td>
              <td>${parseFloat(item.monto || 0).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default GastosReport;
