import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col, Tabs, Tab } from "react-materialize";
import GastosIngresos from "./GastosIngresos";
import Deudas from "./Deudas";
import ApiUtils from "../api/ApiUtils";
import Config from "../api/Config";

const Gestor = () => {
  const [salarioMensual, setSalarioMensual] = useState("");
  const [recomendaciones, setRecomendaciones] = useState(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleCalcularPresupuesto = () => {
    if (!salarioMensual || salarioMensual <= 0) {
      setError("Por favor, introduce un salario mensual válido");
      setRecomendaciones(null);
      return;
    }

    const necesidades = salarioMensual * 0.5;
    const deseos = salarioMensual * 0.3;
    const ahorros = salarioMensual * 0.2;

    setRecomendaciones({ necesidades, deseos, ahorros });
    setError("");
  };

  const handleGuardarFinanzas = async () => {
    const id_usuario = sessionStorage.getItem("Usuario_Id");
    if (!id_usuario) {
      setError("Usuario no autenticado");
      return;
    }
  
    if (!salarioMensual || isNaN(salarioMensual) || salarioMensual <= 0) {
      setError("Introduce un salario mensual válido");
      return;
    }
  
    const payload = { salario_mensual: parseFloat(salarioMensual), id_usuario };
    console.log("Payload enviado:", payload);
  
    const service = {
      ...Config.Finanzas.Guardar,
      data: payload,
    };
  
    ApiUtils(
      service,
      () => {
        setSuccess("Presupuesto guardado exitosamente");
        setError("");
      },
      (err) => {
        console.error("Error al guardar:", err.response?.data || err.message);
        setError("Error al guardar el presupuesto");
      }
    );
  };
  
  

  return (
    <div className="gestor-container">
      <Card>
      <h4 style={{ textAlign: "center" }}>
      Gestor de Finanzas Personales</h4>
        <Tabs>
          <Tab title="Finanzas" active>
            <Row>
              <Col s={12}>
                <h5>Ingresar Salario Mensual</h5>
                <input
                  type="number"
                  placeholder="Salario Mensual"
                  value={salarioMensual}
                  onChange={(e) => setSalarioMensual(e.target.value)}
                />
                <Button
                  className="blue darken-2"
                  style={{ marginTop: "20px" }}
                  onClick={handleCalcularPresupuesto}
                >
                  Calcular Presupuesto
                </Button>
                {recomendaciones && (
                  <div>
                    <h5>Recomendaciones:</h5>
                    <ul>
                      <li>
                        <strong>Necesidades:</strong> $
                        {recomendaciones.necesidades?.toFixed(2) || 0}
                      </li>
                      <li>
                        <strong>Deseos:</strong> $
                        {recomendaciones.deseos?.toFixed(2) || 0}
                      </li>
                      <li>
                        <strong>Ahorros/Inversiones:</strong> $
                        {recomendaciones.ahorros?.toFixed(2) || 0}
                      </li>
                    </ul>
                    <Button
                      className="green darken-2"
                      style={{ marginTop: "20px" }}
                      onClick={handleGuardarFinanzas}
                    >
                      Guardar Presupuesto
                    </Button>
                  </div>
                )}
              </Col>
            </Row>
          </Tab>

          {/* Gastos e Ingresos */}
          <Tab title="Gastos e Ingresos">
            <GastosIngresos />
          </Tab>

          {/* Deudas */}
          <Tab title="Deudas">
            <Deudas />
          </Tab>
        </Tabs>
        {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}
        {success && (
          <p style={{ color: "green", marginTop: "20px" }}>{success}</p>
        )}
      </Card>
    </div>
  );
};

export default Gestor;
