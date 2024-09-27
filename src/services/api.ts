import { AppError } from '@/utils/AppError'
import axios from 'axios'


const backend_host = `http://localhost`
const port = 3333

const api = axios.create({
  baseURL: `${backend_host}:${port}`,
})

/**
 * Interceptor any request.
 * Inside config are every param send by request
 * This method has 2 arguments: first used in case of success, second failure.
 */
api.interceptors.request.use(
  (config) => config,
  (error) => {
    return Promise.reject(error)
  },
)

api.interceptors.response.use(
  (request) => request,
  (error) => {
    if (error.response && error.response.data)
      return Promise.reject(new AppError(error.response.data.message))

    return Promise.reject(error)
  },
)

export { api }
