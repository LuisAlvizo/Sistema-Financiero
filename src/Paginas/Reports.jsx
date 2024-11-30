import React from "react";
import FinanzasReport from "./FinanzasReport";
import GastosReport from "./GastosReport";
import IngresosReport from "./IngresosReport";
import DeudasReport from "./DeudasReport";
import SavedAnalysis from "./SavedAnalysis";
import { Tabs, Tab, Card } from "react-materialize";

const Reports = () => {
  return (
    <div className="reports-container">
      <Card>
        <h4 style={{ textAlign: "center", marginBottom: "20px" }}>Reportes de Finanzas</h4>
        <Tabs className="" options={{ swipeable: false }}>
          <Tab title="Finanzas" active>
            <div className="table-responsive">
              <FinanzasReport />
            </div>
          </Tab>
          <Tab title="Gastos">
            <div className="table-responsive">
              <GastosReport />
            </div>
          </Tab>
          <Tab title="Ingresos">
            <div className="table-responsive">
              <IngresosReport />
            </div>
          </Tab>
          <Tab title="Deudas">
            <div className="table-responsive">
              <DeudasReport />
            </div>
          </Tab>
          <Tab title="Análisis">
            <div className="table-responsive">
              <SavedAnalysis />
            </div>
          </Tab>
        </Tabs>
      </Card>
    </div>
  );
};

export default Reports;
