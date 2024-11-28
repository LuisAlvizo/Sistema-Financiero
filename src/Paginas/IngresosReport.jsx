import React, { useState, useEffect } from "react";
import ApiUtils from "../api/ApiUtils";
import Config from "../api/Config";
import { Table, Card } from "react-materialize";

const IngresosReport = () => {
  const [ingresos, setIngresos] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const obtenerIngresos = async () => {
      const service = {
        ...Config.Ingresos.Obtener,
        headers: Config.Ingresos.Obtener.headers(),
      };

      try {
        ApiUtils(
          service,
          (response) => setIngresos(response.ingresos),
          () => setError("Error al obtener los ingresos")
        );
      } catch (err) {
        setError("Error al realizar la solicitud");
      }
    };

    obtenerIngresos();
  }, []);

  return (
    <Card>
      <h4>Historial de Ingresos</h4>
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
          {ingresos.map((item, index) => (
            <tr key={index}>
              <td>{new Date(item.fecha_ingreso).toLocaleDateString()}</td>
              <td>{item.descripcion}</td>
              <td>${parseFloat(item.monto || 0).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default IngresosReport;
