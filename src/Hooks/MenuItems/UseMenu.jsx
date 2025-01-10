import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react'
import useAxiosPublic from '../useAxiosPublic';

export default function UseMenu() {

    const axiosPublic = useAxiosPublic();

    // const [ menu, setMenu ] = useState([]);
    // const [loading, setLoading] = useState(true);

    // //    useEffect(() => {
    // //         fetch(`${import.meta.env.VITE_dataApi}/menu`)
    // //             .then(response => response.json())
    // //             .then(data => {
    // //                 setMenu(data);
    // //             })
    // //     }, [])

    // useing the transtack query function call the data base ----------------------

    const {refetch, data: menu = [], isPending: loading} = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const response = await axiosPublic.get("/menu");
            return response.data;
        }
    })

  return [menu, loading, refetch];
}
