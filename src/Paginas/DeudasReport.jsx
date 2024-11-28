import React, { useState, useEffect } from "react";
import ApiUtils from "../api/ApiUtils";
import Config from "../api/Config";
import { Table, Card } from "react-materialize";

const DeudasReport = () => {
  const [deudas, setDeudas] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerDeudas = async () => {
      const service = {
        ...Config.Deudas.Listar,
        headers: Config.Deudas.Listar.headers(),
      };

      try {
        ApiUtils(
          service,
          (response) => setDeudas(response),
          () => setError("Error al obtener las deudas")
        );
      } catch (err) {
        setError("Error al realizar la solicitud");
      }
    };

    obtenerDeudas();
  }, []);

  return (
    <Card>
      <h4>Historial de Deudas</h4>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Table>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Acreedor</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {deudas.map((item, index) => (
            <tr key={index}>
              <td>{item.descripcion}</td>
              <td>${parseFloat(item.monto || 0).toFixed(2)}</td>
              <td>{new Date(item.fecha_inicio).toLocaleDateString()}</td>
              <td>{item.acreedor}</td>
              <td>{item.estado}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default DeudasReport;
