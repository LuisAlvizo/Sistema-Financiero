import React, { useState } from 'react';
import ApiUtils from '../api/ApiUtils';
import Config from '../api/Config';
import { Button, Card, Row, Col } from 'react-materialize';

const Deudas = () => {
    const [nuevaDeuda, setNuevaDeuda] = useState({
        descripcion: '',
        monto: '',
        fecha_inicio: '',
        acreedor: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Registrar nueva deuda
    const handleRegistrarDeuda = () => {
        ApiUtils(
            { ...Config.Deudas.Registrar, data: nuevaDeuda },
            () => {
                setSuccess('Deuda registrada con éxito');
                setError('');
                setNuevaDeuda({ descripcion: '', monto: '', fecha_inicio: '', acreedor: '' });
            },
            () => setError('Error al registrar la deuda')
        );
    };

    return (
        <div className="deudas-container">
            <Card>
                <h4>Gestión de Deudas</h4>
                <Row>
                    <Col s={12}>
                        <h5>Registrar Nueva Deuda</h5>
                        <input
                            type="text"
                            placeholder="Descripción"
                            value={nuevaDeuda.descripcion}
                            onChange={(e) => setNuevaDeuda({ ...nuevaDeuda, descripcion: e.target.value })}
                        />
                        <input
                            type="number"
                            placeholder="Monto"
                            value={nuevaDeuda.monto}
                            onChange={(e) => setNuevaDeuda({ ...nuevaDeuda, monto: e.target.value })}
                        />
                        <input
                            type="date"
                            placeholder="Fecha de inicio"
                            value={nuevaDeuda.fecha_inicio}
                            onChange={(e) => setNuevaDeuda({ ...nuevaDeuda, fecha_inicio: e.target.value })}
                        />
                        <input
                            type="text"
                            placeholder="Acreedor"
                            value={nuevaDeuda.acreedor}
                            onChange={(e) => setNuevaDeuda({ ...nuevaDeuda, acreedor: e.target.value })}
                        />
                        <Button className="blue darken-2" style={{ marginTop: '20px' }} onClick={handleRegistrarDeuda}>
                            Registrar Deuda
                        </Button>
                    </Col>
                </Row>
                {error && <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>}
                {success && <p style={{ color: 'green', marginTop: '20px' }}>{success}</p>}
            </Card>
        </div>
    );
};

export default Deudas;
