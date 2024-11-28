import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Sidebar.css';
import { Dashboard, PieChart, BarChart, People, Settings, Logout, Menu } from '@mui/icons-material';
import { SiGooglecampaignmanager360 } from "react-icons/si";

const Sidebar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { text: 'Dashboard', icon: <Dashboard />, route: '/dashboard' },
    { text: 'Analytics', icon: <PieChart />, route: '/analytics' },
    { text: 'Reports', icon: <BarChart />, route: '/reports' },
    { text: 'Gestor', icon: <SiGooglecampaignmanager360 />, route: '/gestor' },
    { text: 'Users', icon: <People />, route: '/users' },
    { text: 'Settings', icon: <Settings />, route: '/settings' },
  ];

  const handleLogout = () => {
    sessionStorage.removeItem('Token_usuario'); 
    sessionStorage.removeItem('Usuario_Id'); 
    navigate('/login');
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <span className="menu-icon" onClick={() => setIsCollapsed(!isCollapsed)}>
          <Menu />
        </span>
        {!isCollapsed && <span>Admin Panel</span>}
      </div>
      <ul className="sidebar-list">
        {menuItems.map((item) => (
          <li
            key={item.text}
            className="sidebar-item"
            onClick={() => navigate(item.route)}
          >
            <span className="sidebar-item-icon">{item.icon}</span>
            {!isCollapsed && item.text}
          </li>
        ))}
        <li className="sidebar-item" onClick={handleLogout}>
          <span className="sidebar-item-icon">
            <Logout />
          </span>
          {!isCollapsed && 'Logout'}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
