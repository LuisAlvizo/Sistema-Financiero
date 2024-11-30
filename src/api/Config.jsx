const ApiUrl = import.meta.env.VITE_REACT_API_URL;

const Config = {
  Usuario: {
    Login: {
      method: "POST",
      url: `${ApiUrl}/login`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
    Registro: {
      method: "POST",
      url: `${ApiUrl}/insert-usuario`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    },
    Logout: {
      method: "POST",
      url: `${ApiUrl}/logout`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    Recomendaciones: {
      method: "POST",
      url: `${ApiUrl}/recomendaciones`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    GuardarAnalisis: {
      method: "POST",
      url: `${ApiUrl}/guardar-analisis`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    ObtenerDatos: {
      method: "GET",
      url: `${ApiUrl}/usuario/datos`,
      headers: () => ({
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    ActualizarDatos: {
      method: "PUT",
      url: `${ApiUrl}/usuario/actualizar`,
      headers: () => ({
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    AnalisisGuardados: {
      method: "GET",
      url: `${ApiUrl}/analisis-guardados`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    CambiarContraseña: {
      method: "POST",
      url: `${ApiUrl}/usuario/cambiar-contrasena`,
      headers: () => ({
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    EliminarCuenta: {
      method: "DELETE",
      url: `${ApiUrl}/usuario/eliminar`,
      headers: () => ({
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
  },
  Finanzas: {
    Guardar: {
      method: "POST",
      url: `${ApiUrl}/finanzas`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    Obtener: {
      method: "GET",
      url: `${ApiUrl}/finanzas`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    Eliminar: (id) => ({
      method: "DELETE",
      url: `${ApiUrl}/finanzas/${id}`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    }),
  },
  Gastos: {
    Guardar: {
      method: "POST",
      url: `${ApiUrl}/gastos`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    Obtener: {
      method: "GET",
      url: `${ApiUrl}/gastos`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    Eliminar: (id) => ({
      method: "DELETE",
      url: `${ApiUrl}/gastos/${id}`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    }),
  },
  Ingresos: {
    Guardar: {
      method: "POST",
      url: `${ApiUrl}/ingresos`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    Obtener: {
      method: "GET",
      url: `${ApiUrl}/ingresos`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    Eliminar: (id) => ({
      method: "DELETE",
      url: `${ApiUrl}/ingresos/${id}`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    }),
  },
  Tipos: {
    TipoGasto: {
      method: "GET",
      url: `${ApiUrl}/tipo-gasto`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    TipoIngreso: {
      method: "GET",
      url: `${ApiUrl}/tipo-ingreso`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
  },
  Deudas: {
    Registrar: {
      method: "POST",
      url: `${ApiUrl}/deudas`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    Listar: {
      method: "GET",
      url: `${ApiUrl}/deudas`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
    Actualizar: (id) => ({
      method: "PUT",
      url: `${ApiUrl}/deudas/${id}`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    }),
    Eliminar: (id) => ({
      method: "DELETE",
      url: `${ApiUrl}/deudas/${id}`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    }),
  },
  Dashboard: {
    ObtenerResumen: (mes, anio) => ({
      method: "GET",
      url: `${ApiUrl}/dashboard/resumen/${mes}/${anio}`,
      headers: () => ({
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    }),
  },
  Sectores: {
    Obtener: {
      method: "GET",
      url: `${ApiUrl}/sectores`,
      headers: () => ({
        Accept: "application/json",
        Authorization: `Bearer ${sessionStorage.getItem("Token_usuario")}`,
      }),
    },
  },
};

export default Config;
