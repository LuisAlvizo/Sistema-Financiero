import axios from 'axios';

const ApiUtils = async (service, callback = null, error = null, before = null, end = null) => {
    try {
        if (before) before();

        // Si `headers` es una función, ejecútala para obtener los encabezados dinámicos
        const headers =
            typeof service.headers === 'function' ? service.headers() : service.headers;

        const response = await axios({
            method: service.method,
            url: service.url,
            headers: headers,
            data: service.data,
            timeout: 300000,
        });

        if (callback) callback(response.data);
    } catch (err) {
        if (error) error(err);
    } finally {
        if (end) end();
    }
};

export default ApiUtils;
