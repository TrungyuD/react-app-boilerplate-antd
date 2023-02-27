import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import StorageUtils from 'utils/storage';

export class HttpClient {
  axiosInstance: AxiosInstance;
  constructor() {
    const accessToken = StorageUtils.getItem('accessToken');
    const config: AxiosRequestConfig = {
      baseURL: process.env.REACT_APP_API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + accessToken,
      },
      timeout: 5000,
    };
    this.axiosInstance = axios.create(config);
  }
}
