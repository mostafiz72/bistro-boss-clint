import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth/useAuth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

export default function useAxiosSecure() {
  
  const navigate = useNavigate();
  const { signOutUser } = useAuth();

  axiosSecure.interceptors.request.use(function (config) {
    const token = localStorage.getItem('access-token');
    console.log('request stopped by interceptors', token);
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, function (error) {
    return Promise.reject(error);
  })

  /// intercepts 401 and 403 status requests ------------------------

  axiosSecure.interceptors.response.use(function (response) {
    return response;
  }, async(error) => {
    const status = error.response.status;
    console.log('status error in the interceptor', status);
    if(status === 401 || status === 403){
      await signOutUser();
      navigate('/login'); // Redirect to login page after log out
    }
    return Promise.reject(error);
  })

  return axiosSecure;
}
