const ApiUrl = import.meta.env.VITE_REACT_API_URL;

const Config = {
  Usuario: {
    Login: {
      method: 'POST',
      url: ApiUrl + '/login',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
    Registro: {
      method: 'POST',
      url: ApiUrl + '/insert-usuario',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
    Logout: {
        method: 'POST',
        url: ApiUrl + '/logout',
        headers: () => ({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('Token_usuario')}`,
        }),
      },
      Recomendaciones: {
        method: 'POST',
        url: ApiUrl + '/recomendaciones',
        headers: () => ({
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionStorage.getItem('Token_usuario')}`,
        }),
      },
  },
};

export default Config;
