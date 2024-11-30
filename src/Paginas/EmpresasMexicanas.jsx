import React, { useState } from "react";
import { Card, Row, Col, TextInput, Button } from "react-materialize";
import "../CSS/EmpresasMexicanas.css";

const EmpresasMexicanas = () => {
  const empresas = [
    { nombre: "Walmart México", ticker: "WALMEX.MX" },
    { nombre: "Grupo Bimbo", ticker: "BIMBOA.MX" },
    { nombre: "Grupo Aeroportuario del Pacífico", ticker: "GAPB.MX" },
    { nombre: "Cemex", ticker: "CEMEXCPO.MX" },
    { nombre: "FEMSA", ticker: "FEMSAUBD.MX" },
    { nombre: "Grupo México", ticker: "GMEXICOB.MX" },
    { nombre: "Alsea", ticker: "ALSEA.MX" },
    { nombre: "Banorte", ticker: "GFNORTEO.MX" },
    { nombre: "Televisa", ticker: "TLEVISACPO.MX" },
    { nombre: "Arca Continental", ticker: "AC.MX" },
    { nombre: "Kimberly-Clark de México", ticker: "KIMBERA.MX" },
    { nombre: "Liverpool", ticker: "LIVEPOLC-1.MX" },
    { nombre: "Grupo Lala", ticker: "LALAB.MX" },
    { nombre: "Grupo Carso", ticker: "GCARSOA1.MX" },
    { nombre: "Vitro", ticker: "VITROA.MX" },
    { nombre: "Fibra Uno", ticker: "FUNO11.MX" },
    { nombre: "Grupo Elektra", ticker: "ELEKTRA.MX" },
    { nombre: "Industrias Peñoles", ticker: "PE&OLES.MX" },
    { nombre: "Grupo Herdez", ticker: "HERDEZ.MX" },
    { nombre: "Grupo Alfa", ticker: "ALFAA.MX" },
    { nombre: "OHL México", ticker: "OHLMEX.MX" },
  ];

  const [filtro, setFiltro] = useState("");
  const [paginaActual, setPaginaActual] = useState(1);
  const resultadosPorPagina = 9;

  const empresasFiltradas = empresas.filter(
    (empresa) =>
      empresa.nombre.toLowerCase().includes(filtro.toLowerCase()) ||
      empresa.ticker.toLowerCase().includes(filtro.toLowerCase())
  );

  const indiceInicio = (paginaActual - 1) * resultadosPorPagina;
  const indiceFinal = indiceInicio + resultadosPorPagina;
  const empresasPaginadas = empresasFiltradas.slice(indiceInicio, indiceFinal);

  const totalPaginas = Math.ceil(empresasFiltradas.length / resultadosPorPagina);

  return (
    <div className="empresas-container">
      <Card>
        <h4 className="center-align">Empresas Mexicanas</h4>
        <div className="search-bar-container">
          <TextInput
            id="search"
            placeholder="Buscar empresa o ticker"
            value={filtro}
            onChange={(e) => {
              setFiltro(e.target.value);
              setPaginaActual(1); // Resetear a la primera página al filtrar
            }}
            icon=""
            style={{
              margin: "20px auto",
              maxWidth: "500px",
              padding: "10px",
              borderRadius: "25px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          />
        </div>
        <Row>
          {empresasPaginadas.length > 0 ? (
            empresasPaginadas.map((empresa, index) => (
              <Col s={12} m={6} l={4} key={index}>
                <Card
                  className="empresa-card hoverable"
                  style={{
                    textAlign: "center",
                    borderRadius: "10px",
                    padding: "10px",
                    backgroundColor: "#f5f5f5",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <h6 style={{ fontWeight: "bold", color: "#1565c0" }}>
                    {empresa.nombre}
                  </h6>
                  <p
                    className="ticker"
                    style={{
                      color: "#424242",
                      fontStyle: "italic",
                      fontSize: "14px",
                    }}
                  >
                    {empresa.ticker}
                  </p>
                </Card>
              </Col>
            ))
          ) : (
            <Col s={12}>
              <p className="center-align" style={{ color: "#757575" }}>
                No se encontraron resultados.
              </p>
            </Col>
          )}
        </Row>
        {/* Paginación */}
        <Row className="center-align">
          {totalPaginas > 1 && (
            <div className="pagination">
              <Button
                className="blue darken-2"
                disabled={paginaActual === 1}
                onClick={() => setPaginaActual(paginaActual - 1)}
              >
                Anterior
              </Button>
              <span style={{ margin: "0 10px" }}>
                Página {paginaActual} de {totalPaginas}
              </span>
              <Button
                className="blue darken-2"
                disabled={paginaActual === totalPaginas}
                onClick={() => setPaginaActual(paginaActual + 1)}
              >
                Siguiente
              </Button>
            </div>
          )}
        </Row>
      </Card>
    </div>
  );
};

export default EmpresasMexicanas;
