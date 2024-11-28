import React, { useEffect, useState } from "react";
import ApiUtils from "../api/ApiUtils";
import Config from "../api/Config";
import { Table, Button } from "react-materialize";

const FinanzasReport = () => {
    const [finanzas, setFinanzas] = useState([]);
    const [error, setError] = useState("");

    // Obtener datos de finanzas personales
    useEffect(() => {
        const fetchFinanzas = async () => {
            try {
                ApiUtils(
                    Config.Finanzas.Obtener,
                    (response) => setFinanzas(response.finanzas),
                    () => setError("Error al obtener las finanzas personales")
                );
            } catch (err) {
                setError("Error al realizar la solicitud");
            }
        };

        fetchFinanzas();
    }, []);

    // Eliminar registro de finanzas
    const handleEliminarFinanzas = (id) => {
      if (!id) {
          setError("ID de finanzas no válido.");
          return;
      }
  
      ApiUtils(
          Config.Finanzas.Eliminar(id),
          () => {
              setFinanzas((prev) => prev.filter((item) => item.id_finanzas !== id));
              setError("");
          },
          () => setError("Error al eliminar el registro de finanzas")
      );
  };
  

    return (
        <div className="finanzas-report">
            <h4>Historial de Finanzas Personales</h4>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="table-responsive">
                <Table>
                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Salario Mensual</th>
                            <th>Necesidades</th>
                            <th>Deseos</th>
                            <th>Ahorros</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {finanzas.map((item) => (
                            <tr key={item.id_finanzas}>
                                <td>{new Date(item.fecha).toLocaleDateString()}</td>
                                <td>${parseFloat(item.salario_mensual).toFixed(2)}</td>
                                <td>${parseFloat(item.necesidades).toFixed(2)}</td>
                                <td>${parseFloat(item.deseos).toFixed(2)}</td>
                                <td>${parseFloat(item.ahorros).toFixed(2)}</td>
                                <td>
                                    <Button
                                        className="red darken-2"
                                        onClick={() => handleEliminarFinanzas(item.id_finanzas)}
                                    >
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default FinanzasReport;
