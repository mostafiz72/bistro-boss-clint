import React from 'react'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query';

export default function Users() {

    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })

    return (
        <>
            <div className=' w-full'>
                <div className="flex gap-10">
                    <h2 className=' text-3xl'>All Users</h2>
                    <h2 className=' text-3xl'>Total Users: {users.length}</h2>
                </div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Items Name</th>
                            <th>Items Price</th>
                            <th>Items Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map((item, index) => (
                                <tr>
                                    <td>{index + 1}
                                    </td>
                                    <td>{item.name}
                                    </td>
                                    <td className=' btn'>
                                        Edit
                                    </td>
                                    <td><button onClick={() => handleDeleteCart(item._id)} className=' btn btn-error'>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
