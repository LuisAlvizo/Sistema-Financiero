import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Paginas/login";
import Registro from "./Paginas/Registro";
import Dashboard from "./Paginas/Dashboard";
import Analytics from "./Paginas/Analytics";
import MainLayout from "./Paginas/MainLayout";
import FinancialEducationCourse from "./Paginas/FinancialEducationCourse";
import Users from "./Paginas/Users";
import Gestor from "./Paginas/Gestor";
import Reports from "./Paginas/Reports";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

// Componente para proteger rutas
const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!sessionStorage.getItem("Token_usuario"); // Comprueba si el token existe
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas sin menú lateral */}
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/" element={<Navigate to="/login" />} />

        {/* Rutas protegidas */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/analytics"
          element={
            <PrivateRoute>
              <MainLayout>
                <Analytics />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/gestor"
          element={
            <PrivateRoute>
              <MainLayout>
                <Gestor />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <PrivateRoute>
              <MainLayout>
                <Reports />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          element={
            <PrivateRoute>
              <MainLayout>
                <Users />
              </MainLayout>
            </PrivateRoute>
          }
        />
        <Route
          path="/curso"
          element={
            <PrivateRoute>
              <MainLayout>
                <FinancialEducationCourse />
              </MainLayout>
            </PrivateRoute>
          }
        />

        {/* Ruta para página no encontrada */}
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
