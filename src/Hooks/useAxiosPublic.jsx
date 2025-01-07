import axios from 'axios';
import React from 'react'

export default function useAxiosPublic() {

   const axiosPublic = axios.create({
    baseURL: 'http://localhost:5000'
   })

  return axiosPublic;
}
