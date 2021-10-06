const baseUrl = process.env.REACT_APP_API_URL;

const fetchWithoutToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  if (method === 'GET') {
    return fetch(url);
  }

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
};

const fetchWithToken = (endpoint, method = 'GET', data) => {
  const url = `${baseUrl}/${endpoint}`;
  const token = localStorage.getItem('token') || '';

  if (token === '') throw new Error('No se encontró el token');

  if (method === 'GET') {
    return fetch(url, {
      method,
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
};

export { fetchWithoutToken, fetchWithToken };
