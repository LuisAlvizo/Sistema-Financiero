import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ApiUtils from '../api/ApiUtils';
import Config from '../api/Config';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import '../CSS/Login.css'; // Reutilizamos el archivo CSS de Login

const Registro = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const service = {
      ...Config.Usuario.Registro,
      data: {
        nombre,
        email,
        contrasena: password,
        id_tipo_usuario: 1, // Tipo de usuario estándar
      },
    };

    ApiUtils(
      service,
      () => {
        setSuccess('Registro exitoso, ahora puedes iniciar sesión.');
        setTimeout(() => navigate('/login'), 2000);
      },
      (err) => {
        setError(err.response?.data?.message || 'Error al registrarse');
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
      <h2 className="login-title">Crear Cuenta</h2>
      {/* Formulario */}
      <form onSubmit={handleRegistro}>
        <input
          type="text"
          placeholder="Nombre Completo"
          className="login-input"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
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
        {success && <p style={{ color: 'green', marginTop: '10px' }}>{success}</p>}
        <button type="submit" className="login-button">Registrarse</button>
      </form>
      {/* Pie de página */}
      <div className="login-footer">
        ¿Ya tienes cuenta?{' '}
        <a onClick={() => navigate('/login')} href="#!">
          Inicia sesión aquí
        </a>
      </div>
    </div>
  );
};

export default Registro;
