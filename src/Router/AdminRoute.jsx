import React from 'react'
import useAuth from '../Hooks/useAuth/useAuth'
import useAdmin from '../Hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

export default function AdminRoute({children}) {
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) return <div>Loading...</div>
    if(user && isAdmin){
        return children;
    }
  return <Navigate to="/" state={{from: location}} replace></Navigate>
}
