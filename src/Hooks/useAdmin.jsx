import React from 'react'
import useAuth from './useAuth/useAuth'
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

export default function useAdmin() {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user.email}`);
            console.log(res.data);
            
            return res.data?.admin;
        }
    })
  return [isAdmin]
}
