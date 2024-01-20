import axios from 'axios';

const getHeaders = () => {
  return {
    'Content-Type': 'application/json',
  };
};

class ApiMethods {
  static apiRequest(method, url, body = {}) {
    const options = {
      method: method,
      headers: getHeaders(),
      url: url,
    };

    if (method !== 'GET' && method !== 'DELETE') {
      options.data = body;
    }

    return axios(options)
      .then(response => response.data)
      .catch(error => Promise.reject(error));
  }

  static get(url) {
    return this.apiRequest('GET', url);
  }

  static post(url, data) {
    return this.apiRequest('POST', url, data);
  }

  static put(url, data) {
    return this.apiRequest('PUT', url, data);
  }

  static delete(url) {
    return this.apiRequest('DELETE', url);
  }
}

export default ApiMethods;
