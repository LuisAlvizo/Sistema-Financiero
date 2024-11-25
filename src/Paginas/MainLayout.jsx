import React from 'react';
import Sidebar from './Sidebar';
import '../CSS/MainLayout.css'; // Importar estilos

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      {/* Menú lateral */}
      <Sidebar />
      {/* Contenido principal */}
      <div className="main-content">
        <div className="responsive-card">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
