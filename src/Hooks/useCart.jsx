import React from 'react'
import useAxiosSecure from './useAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth/useAuth';

export default function useCart() {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],  /// query key mane cased kora same jinish ta bar bar call kora hole query ki amader help kore ....
        queryFn: async () => {
            const response = await axiosSecure.get(`/carts?email=${user?.email}`);
            return response.data;
        }
    })
    
    return [cart, refetch]

}
