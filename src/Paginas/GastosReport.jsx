import React, { useState, useEffect } from "react";
import ApiUtils from "../api/ApiUtils";
import Config from "../api/Config";
import { Table, Card, Row, Col, Button } from 'react-materialize';
import Swal from "sweetalert2";

const GastosReport = () => {
  const [gastos, setGastos] = useState([]);
  const [mesSeleccionado, setMesSeleccionado] = useState(
    new Date().toISOString().slice(0, 7) // Mes actual en formato YYYY-MM
  );
  const [error, setError] = useState("");

  useEffect(() => {
    obtenerGastos();
  }, []);

  const obtenerGastos = () => {
    ApiUtils(
      Config.Gastos.Obtener,
      (data) => setGastos(data.gastos),
      () => setError("Error al obtener gastos")
    );
  };

  const handleEliminarGasto = (idGasto) => {
    if (!idGasto) {
        setError("ID de gasto no válido.");
        return;
    }

    Swal.fire({
        title: "¿Estás seguro?",
        text: "Esta acción eliminará el gasto de forma permanente.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
    }).then((result) => {
        if (result.isConfirmed) {
            const service = {
                ...Config.Gastos.Eliminar(idGasto),
            };

            try {
                ApiUtils(
                    service,
                    () => {
                        setGastos((prev) =>
                            prev.filter((gasto) => gasto.id_gasto !== idGasto)
                        );
                        Swal.fire(
                            "Eliminado",
                            "El gasto ha sido eliminado con éxito.",
                            "success"
                        );
                    },
                    () =>
                        Swal.fire(
                            "Error",
                            "Hubo un problema al eliminar el gasto.",
                            "error"
                        )
                );
            } catch (err) {
                Swal.fire(
                    "Error",
                    "Error al realizar la solicitud.",
                    "error"
                );
            }
        }
    });
};

  const gastosFiltrados = gastos.filter((gasto) =>
    gasto.fecha_gasto.startsWith(mesSeleccionado)
  );

  return (
    <Card>
      <h4>Reporte de Gastos</h4>

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
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Monto</th>
            <th>Tipo de Gasto</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {gastosFiltrados.map((gasto) => (
            <tr key={gasto.id_gasto}>
              <td>{new Date(gasto.fecha_gasto).toLocaleDateString()}</td>
              <td>{gasto.descripcion}</td>
              <td>${parseFloat(gasto.monto).toFixed(2)}</td>
              <td>{gasto.nombre_tipo_gasto}</td>
              <td>
                <Button
                  className="red darken-2"
                  onClick={() => handleEliminarGasto(gasto.id_gasto)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default GastosReport;
