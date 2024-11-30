import React, { useEffect, useState } from "react";
import ApiUtils from "../api/ApiUtils";
import Config from "../api/Config";
import { Table, Button, Card } from "react-materialize";
import Swal from "sweetalert2";

const FinanzasReport = () => {
    const [finanzas, setFinanzas] = useState([]);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [mesSeleccionado, setMesSeleccionado] = useState(
        new Date().toISOString().slice(0, 7) // Mes actual en formato "YYYY-MM"
    );

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

    // Filtrar finanzas por el mes seleccionado
    const finanzasFiltradas = finanzas.filter((item) =>
        item.fecha.startsWith(mesSeleccionado)
    );

    // Eliminar registro de finanzas
    const handleEliminarFinanzas = (id) => {
        if (!id) {
            setError("ID de finanzas no válido.");
            return;
        }
    
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción eliminará el registro de forma permanente.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                ApiUtils(
                    Config.Finanzas.Eliminar(id),
                    () => {
                        setFinanzas((prev) =>
                            prev.filter((item) => item.id_finanzas !== id)
                        );
                        setSuccess("Registro eliminado correctamente.");
                        setError("");
                        Swal.fire(
                            "Eliminado",
                            "El registro ha sido eliminado con éxito.",
                            "success"
                        );
                    },
                    () =>
                        Swal.fire(
                            "Error",
                            "Hubo un problema al eliminar el registro.",
                            "error"
                        )
                );
            }
        });
    };
    
    

    return (
        <Card className="finanzas-report">
            <h4>Historial de Finanzas Personales</h4>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {success && <p style={{ color: "green" }}>{success}</p>}

            {/* Selector de Mes */}
            <div className="month-filter">
                <label htmlFor="mes-selector">
                    <strong>Seleccionar mes:</strong>
                </label>
                <input
                    type="month"
                    id="mes-selector"
                    value={mesSeleccionado}
                    onChange={(e) => setMesSeleccionado(e.target.value)}
                />
            </div>

            {/* Tabla de Finanzas */}
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
                        {finanzasFiltradas.length > 0 ? (
                            finanzasFiltradas.map((item) => (
                                <tr key={item.id_finanzas}>
                                    <td>{new Date(item.fecha).toLocaleDateString()}</td>
                                    <td>
                                        ${parseFloat(item.salario_mensual || 0).toFixed(2)}
                                    </td>
                                    <td>
                                        ${parseFloat(item.necesidades || 0).toFixed(2)}
                                    </td>
                                    <td>
                                        ${parseFloat(item.deseos || 0).toFixed(2)}
                                    </td>
                                    <td>
                                        ${parseFloat(item.ahorros || 0).toFixed(2)}
                                    </td>
                                    <td>
                                        <Button
                                            className="red darken-2"
                                            onClick={() =>
                                                handleEliminarFinanzas(item.id_finanzas)
                                            }
                                        >
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="center-align">
                                    No hay registros para el mes seleccionado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>
        </Card>
    );
};

export default FinanzasReport;
