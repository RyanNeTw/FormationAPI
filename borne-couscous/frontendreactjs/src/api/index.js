const instance = fetch.create({
  baseURL: 'http://127.0.0.1:3333',
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');

    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    }

    return config;
  }
)

export {
  instance
}