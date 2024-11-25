import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiUtils from '../api/ApiUtils';
import Config from '../api/Config';
import { FaUser } from 'react-icons/fa';
import '../CSS/Login.css'; // Importar los estilos

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    const service = {
      ...Config.Usuario.Login,
      data: { email, contrasena: password },
    };

    ApiUtils(
      service,
      (data) => {
        sessionStorage.setItem('Token_usuario', data.token);
        navigate('/dashboard');
      },
      (err) => {
        setError(err.response?.data?.message || 'Error al iniciar sesión');
      }
    );
  };

  return (
    <div className="login-container">
      {/* Avatar */}
      <div className="login-avatar">
        <FaUser />
      </div>
      {/* Título */}
      <h2 className="login-title">Iniciar Sesión</h2>
      {/* Formulario */}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo Electrónico"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="login-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        <button type="submit" className="login-button">Login</button>
      </form>
      {/* Pie de página */}
      <div className="login-footer">
        ¿No tienes cuenta?{' '}
        <a onClick={() => navigate('/registro')} href="#!">
          Regístrate aquí
        </a>
      </div>
    </div>
  );
};

export default Login;
