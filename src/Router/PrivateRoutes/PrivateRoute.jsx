import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProviders/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({children}) {
    const location = useLocation();
    const { user, loading } = useContext(AuthContext)

    if(loading){
        return <h1>Loading...</h1>;
    }

    if(user?.email){
        return children;
    }


  return <Navigate to={'/login'} state={{From: location}} replace></Navigate>
}
