import React, { useState, useEffect } from "react";
import ApiUtils from "../api/ApiUtils";
import Config from "../api/Config";
import { Button, Row, Col } from "react-materialize";

const GastosIngresos = () => {
  const [gastos, setGastos] = useState([]);
  const [ingresos, setIngresos] = useState([]);
  const [gasto, setGasto] = useState({
    monto: "",
    fecha_gasto: "",
    descripcion: "",
    id_tipo_gasto: "",
  });
  const [ingreso, setIngreso] = useState({
    monto: "",
    fecha_ingreso: "",
    descripcion: "",
    id_tipo_ingreso: "",
  });
  const [tiposGasto, setTiposGasto] = useState([]);
  const [tiposIngreso, setTiposIngreso] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        ApiUtils(Config.Gastos.Obtener, (data) => setGastos(data.gastos));
        ApiUtils(Config.Ingresos.Obtener, (data) => setIngresos(data.ingresos));
        ApiUtils(Config.Tipos.TipoGasto, (data) => setTiposGasto(data));
        ApiUtils(Config.Tipos.TipoIngreso, (data) => setTiposIngreso(data));
      } catch (err) {
        console.error("Error al obtener datos iniciales:", err);
      }
    };
    fetchData();
  }, []);

  const handleGuardarGasto = async () => {
    const id_usuario = sessionStorage.getItem("Usuario_Id");
    if (!id_usuario) {
      setError("Usuario no autenticado");
      return;
    }

    const service = {
      ...Config.Gastos.Guardar,
      data: { ...gasto, id_usuario },
    };

    ApiUtils(
      service,
      () => {
        setSuccess("Gasto guardado exitosamente");
        setError("");
        setGasto({
          monto: "",
          fecha_gasto: "",
          descripcion: "",
          id_tipo_gasto: "",
        });
      },
      () => setError("Error al guardar el gasto")
    );
  };

  const handleGuardarIngreso = async () => {
    const id_usuario = sessionStorage.getItem("Usuario_Id");
    if (!id_usuario) {
      setError("Usuario no autenticado");
      return;
    }

    const service = {
      ...Config.Ingresos.Guardar,
      data: { ...ingreso, id_usuario },
    };

    ApiUtils(
      service,
      () => {
        setSuccess("Ingreso guardado exitosamente");
        setError("");
        setIngreso({
          monto: "",
          fecha_ingreso: "",
          descripcion: "",
          id_tipo_ingreso: "",
        });
      },
      () => setError("Error al guardar el ingreso")
    );
  };

  return (
    <div className="gastos-ingresos-container">
      <Row>
        <Col s={12} m={6}>
          <h5>Registrar Gasto</h5>
          <input
            type="number"
            placeholder="Monto"
            value={gasto.monto}
            onChange={(e) => setGasto({ ...gasto, monto: e.target.value })}
          />
          <input
            type="date"
            value={gasto.fecha_gasto}
            onChange={(e) =>
              setGasto({ ...gasto, fecha_gasto: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Descripción"
            value={gasto.descripcion}
            onChange={(e) =>
              setGasto({ ...gasto, descripcion: e.target.value })
            }
          />
          <select
            className="browser-default professional-select"
            value={gasto.id_tipo_gasto}
            onChange={(e) =>
              setGasto({ ...gasto, id_tipo_gasto: e.target.value })
            }
          >
            <option value="" disabled>
              Selecciona un tipo de gasto
            </option>
            {tiposGasto.map((tipo) => (
              <option key={tipo.id_tipo_gasto} value={tipo.id_tipo_gasto}>
                {tipo.nombre_tipo_gasto}
              </option>
            ))}
          </select>
          <Button
            className="red darken-2"
            style={{ marginTop: "20px" }}
            onClick={handleGuardarGasto}
          >
            Guardar Gasto
          </Button>
        </Col>
        <Col s={12} m={6}>
          <h5>Registrar Ingreso</h5>
          <input
            type="number"
            placeholder="Monto"
            value={ingreso.monto}
            onChange={(e) =>
              setIngreso({ ...ingreso, monto: e.target.value })
            }
          />
          <input
            type="date"
            value={ingreso.fecha_ingreso}
            onChange={(e) =>
              setIngreso({ ...ingreso, fecha_ingreso: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Descripción"
            value={ingreso.descripcion}
            onChange={(e) =>
              setIngreso({ ...ingreso, descripcion: e.target.value })
            }
          />
          <select
            className="browser-default professional-select"
            value={ingreso.id_tipo_ingreso}
            onChange={(e) =>
              setIngreso({ ...ingreso, id_tipo_ingreso: e.target.value })
            }
          >
            <option value="" disabled>
              Selecciona un tipo de ingreso
            </option>
            {tiposIngreso.map((tipo) => (
              <option key={tipo.id_tipo_ingreso} value={tipo.id_tipo_ingreso}>
                {tipo.nombre_tipo_ingreso}
              </option>
            ))}
          </select>
          <Button
            className="blue darken-2"
            style={{ marginTop: "20px" }}
            onClick={handleGuardarIngreso}
          >
            Guardar Ingreso
          </Button>
        </Col>
      </Row>
      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}
      {success && (
        <p style={{ color: "green", marginTop: "20px" }}>{success}</p>
      )}
    </div>
  );
};

export default GastosIngresos;
