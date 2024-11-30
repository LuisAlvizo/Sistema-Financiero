import React, { useState, useEffect } from "react";
import ApiUtils from "../api/ApiUtils";
import Config from "../api/Config";
import { Card, Button, Row, Col, TextInput } from "react-materialize";
import Swal from "sweetalert2";
import "../CSS/Users.css";

const Users = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    email: "",
  });
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Obtener datos del usuario al cargar el componente
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        ApiUtils(
          Config.Usuario.ObtenerDatos,
          (response) => {
            setUserData({
              nombre: response.user.nombre,
              email: response.user.email,
            });
          },
          () => setError("Error al obtener datos del usuario.")
        );
      } catch (err) {
        setError("Error al realizar la solicitud.");
      }
    };

    fetchUserData();
  }, []);

  // Actualizar datos del usuario
  const handleUpdateUser = () => {
    ApiUtils(
      { ...Config.Usuario.ActualizarDatos, data: userData },
      () => {
        Swal.fire("Actualización exitosa", "Tus datos han sido actualizados.", "success");
        setSuccess("Datos actualizados correctamente.");
      },
      () => setError("Error al actualizar los datos.")
    );
  };

  // Cambiar contraseña
  const handleChangePassword = () => {
    if (passwords.newPassword.trim() === "" || passwords.currentPassword.trim() === "") {
      setError("Por favor, completa los campos de contraseña.");
      return;
    }

    ApiUtils(
      { ...Config.Usuario.CambiarContraseña, data: passwords },
      () => {
        Swal.fire("Contraseña cambiada", "Tu contraseña ha sido actualizada.", "success");
        setSuccess("Contraseña actualizada correctamente.");
        setPasswords({ currentPassword: "", newPassword: "" });
      },
      () => setError("Error al cambiar la contraseña.")
    );
  };

  // Eliminar cuenta
  const handleDeleteAccount = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará tu cuenta de forma permanente.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar mi cuenta",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        ApiUtils(
          Config.Usuario.EliminarCuenta,
          () => {
            Swal.fire("Cuenta eliminada", "Tu cuenta ha sido eliminada con éxito.", "success");
            sessionStorage.clear();
            window.location.href = "/login";
          },
          () => Swal.fire("Error", "No se pudo eliminar la cuenta.", "error")
        );
      }
    });
  };

  return (
    <div className="user-account-container">
      <Row>
        {/* Card para Actualizar Información */}
        <Col s={12} m={6}>
          <Card className="responsive-card">
            <h5>Actualizar Información</h5>
            <TextInput
              label="Nombre"
              value={userData.nombre}
              onChange={(e) => setUserData({ ...userData, nombre: e.target.value })}
            />
            <TextInput label="Correo Electrónico" value={userData.email} disabled />
            <Button className="blue darken-2 full-width" onClick={handleUpdateUser}>
              Actualizar Información
            </Button>
          </Card>
        </Col>

        {/* Card para Cambiar Contraseña */}
        <Col s={12} m={6}>
          <Card className="responsive-card">
            <h5>Cambiar Contraseña</h5>
            <TextInput
              label="Contraseña Actual"
              type="password"
              value={passwords.currentPassword}
              onChange={(e) => setPasswords({ ...passwords, currentPassword: e.target.value })}
            />
            <TextInput
              label="Nueva Contraseña"
              type="password"
              value={passwords.newPassword}
              onChange={(e) => setPasswords({ ...passwords, newPassword: e.target.value })}
            />
            <Button className="orange darken-2 full-width" onClick={handleChangePassword}>
              Cambiar Contraseña
            </Button>
          </Card>
        </Col>

        {/* Card para Eliminar Cuenta */}
        <Col s={12}>
          <Card className="responsive-card delete-account-card">
            <h5>Eliminar Cuenta</h5>
            <p>Esta acción es irreversible. Todos tus datos serán eliminados permanentemente.</p>
            <Button className="red darken-2 full-width" onClick={handleDeleteAccount}>
              Eliminar Cuenta
            </Button>
          </Card>
        </Col>
      </Row>

      {/* Mensajes de error o éxito */}
      {error && <p className="error-text">{error}</p>}
      {success && <p className="success-text">{success}</p>}
    </div>
  );
};

export default Users;
