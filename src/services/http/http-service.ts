import axios, { AxiosInstance } from 'axios';
import { LOCAL_STORAGE_KEY } from 'constants/app';
import StorageUtils from 'utils/storage';

export class HttpClient {
  axiosInstance: AxiosInstance;
  constructor() {
    const instance = axios.create({
      baseURL: process.env.REACT_APP_API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      timeout: 5000,
    });

    instance.interceptors.request.use(
      async config => {
        const accessToken = StorageUtils.getItem(
          LOCAL_STORAGE_KEY.ACCESS_TOKEN,
        );
        if (accessToken) {
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }

        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    instance.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;

        if (
          error.response.status === 401 &&
          error.response.statusText === 'Unauthorized' &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true;

          const refreshToken = localStorage.getItem('refreshToken');

          // Call your refresh token API here to get a new access token
          const newAccessToken = await instance.post('/auth/refresh-tokens', {
            refreshToken,
          });

          // Save the new access token to local storage
          const data = newAccessToken?.data?.data;

          const { access, refresh } = data;

          StorageUtils.setItem(LOCAL_STORAGE_KEY.ACCESS_TOKEN, access.token);
          StorageUtils.setItem(
            LOCAL_STORAGE_KEY.TIME_EXPIRE_ACCESS_TOKEN,
            access.expires,
          );
          StorageUtils.setItem(LOCAL_STORAGE_KEY.REFRESH_TOKEN, refresh.token);
          StorageUtils.setItem(
            LOCAL_STORAGE_KEY.TIME_EXPIRE_REFRESH_TOKEN,
            refresh.expires,
          );

          // Add the new access token to the request headers
          instance.defaults.headers.common.Authorization = `Bearer ${access.token}`;

          // Retry the original request with the new access token
          return instance(originalRequest);
        }

        return Promise.reject(error);
      },
    );

    this.axiosInstance = instance;
  }
}
