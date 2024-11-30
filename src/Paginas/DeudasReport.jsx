import React, { useState, useEffect } from "react";
import ApiUtils from "../api/ApiUtils";
import Config from "../api/Config";
import { Table, Card, Button, Row, Col } from "react-materialize";
import Swal from "sweetalert2";

const DeudasReport = () => {
  const [deudas, setDeudas] = useState([]);
  const [mesSeleccionado, setMesSeleccionado] = useState(
    new Date().toISOString().slice(0, 7)
  ); // Formato 'YYYY-MM'
  const [error, setError] = useState("");

  // Obtener todas las deudas
  useEffect(() => {
    const obtenerDeudas = async () => {
      try {
        ApiUtils(
          Config.Deudas.Listar,
          (response) => setDeudas(response),
          () => setError("Error al obtener las deudas")
        );
      } catch (err) {
        setError("Error al realizar la solicitud");
      }
    };

    obtenerDeudas();
  }, []);

  // Manejar el cambio de estado a "pagada"
  const handleMarcarPagada = async (idDeuda) => {
    const service = {
      ...Config.Deudas.Eliminar(idDeuda),
    };

    try {
      ApiUtils(
        service,
        () => {
          setDeudas(deudas.filter((deuda) => deuda.id_deuda !== idDeuda));
        },
        () => setError("Error al eliminar la deuda")
      );
    } catch (err) {
      setError("Error al realizar la solicitud");
    }
  };

  // Filtrar deudas por mes seleccionado
  const deudasPorMes = deudas.filter((deuda) =>
    deuda.fecha_inicio.startsWith(mesSeleccionado)
  );

  return (
    <Card>
      <h4>Historial de Deudas</h4>
      <Row>
        <Col s={12}>
          <label htmlFor="mes-seleccionado">
            <strong>Seleccionar Mes:</strong>
          </label>
          <input
            id="mes-seleccionado"
            type="month"
            value={mesSeleccionado}
            onChange={(e) => setMesSeleccionado(e.target.value)}
          />
        </Col>
      </Row>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Table>
        <thead>
          <tr>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Fecha</th>
            <th>Acreedor</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {deudasPorMes.length > 0 ? (
            deudasPorMes.map((item, index) => (
              <tr key={index}>
                <td>{item.descripcion}</td>
                <td>${parseFloat(item.monto || 0).toFixed(2)}</td>
                <td>{new Date(item.fecha_inicio).toLocaleDateString()}</td>
                <td>{item.acreedor}</td>
                <td>{item.estado}</td>
                <td>
                  {item.estado === "pendiente" && (
                    <Button
                      className="green darken-2"
                      onClick={() => handleMarcarPagada(item.id_deuda)}
                    >
                      Marcar como Pagada
                    </Button>
                  )}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="center-align">
                No hay deudas registradas para el mes seleccionado.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </Card>
  );
};

export default DeudasReport;
