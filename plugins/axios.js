// plugins/axios.js
import { defineNuxtPlugin } from '#app'
import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
  const api = axios.create({
    baseURL: nuxtApp.$config.public.apiBaseUrl || 'http://127.0.0.1:8000/api',
    withCredentials: true,
  })

  // Set default headers for all requests
  
api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  )

  
  // Inject axios instance to context as $api
  nuxtApp.provide('api', api)

})

