import React, { useState, useEffect } from 'react';
import ApiUtils from '../api/ApiUtils';
import Config from '../api/Config';
import { Table, Card, Row, Col, Button } from 'react-materialize';
import Swal from "sweetalert2";

const IngresosReport = () => {
    const [ingresos, setIngresos] = useState([]);
    const [mesSeleccionado, setMesSeleccionado] = useState(new Date().toISOString().slice(0, 7)); // Inicializa con el mes actual
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Obtener ingresos
    useEffect(() => {
        const obtenerIngresos = async () => {
            try {
                ApiUtils(
                    Config.Ingresos.Obtener,
                    (data) => setIngresos(data.ingresos),
                    () => setError('Error al obtener ingresos')
                );
            } catch (err) {
                setError('Error al realizar la solicitud');
            }
        };

        obtenerIngresos();
    }, []);

    // Filtrar ingresos por mes
    const ingresosPorMes = ingresos.filter((ingreso) =>
        ingreso.fecha_ingreso.startsWith(mesSeleccionado)
    );

    // Eliminar un ingreso
    const handleEliminarIngreso = (idIngreso) => {
        if (!idIngreso) {
            setError("ID de ingreso no válido.");
            return;
        }
    
        Swal.fire({
            title: "¿Estás seguro?",
            text: "Esta acción eliminará el ingreso de forma permanente.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                const service = {
                    ...Config.Ingresos.Eliminar(idIngreso),
                };
    
                try {
                    ApiUtils(
                        service,
                        () => {
                            setSuccess("Ingreso eliminado exitosamente.");
                            setError("");
                            // Actualizar la lista de ingresos localmente
                            setIngresos((prev) =>
                                prev.filter((ingreso) => ingreso.id_ingreso !== idIngreso)
                            );
                            Swal.fire(
                                "Eliminado",
                                "El ingreso ha sido eliminado con éxito.",
                                "success"
                            );
                        },
                        () =>
                            Swal.fire(
                                "Error",
                                "Hubo un problema al eliminar el ingreso.",
                                "error"
                            )
                    );
                } catch (err) {
                    setError("Error al realizar la solicitud.");
                }
            }
        });
    };

    return (
        <Card>
            <h4>Reporte de Ingresos</h4>
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
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            <Table>
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Descripción</th>
                        <th>Monto</th>
                        <th>Tipo de Ingreso</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {ingresosPorMes.length > 0 ? (
                        ingresosPorMes.map((ingreso) => (
                            <tr key={ingreso.id_ingreso}>
                                <td>{new Date(ingreso.fecha_ingreso).toLocaleDateString()}</td>
                                <td>{ingreso.descripcion}</td>
                                <td>${parseFloat(ingreso.monto).toFixed(2)}</td>
                                <td>{ingreso.nombre_tipo_ingreso}</td>
                                <td>
                                    <Button
                                        className="red darken-2"
                                        onClick={() => handleEliminarIngreso(ingreso.id_ingreso)}
                                    >
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="center-align">
                                No hay ingresos registrados para el mes seleccionado.
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Card>
    );
};

export default IngresosReport;
