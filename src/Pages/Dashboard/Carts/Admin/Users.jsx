import React from 'react'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { RiAdminLine } from 'react-icons/ri';

export default function Users() {

    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })

    // user updated role in the database------------

    const handleMakeAdmin = users => {
        axiosSecure.patch(`/users/admin/${users._id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                refetch();
                Swal.fire({
                    position: "center center",
                    title: 'User Updated',
                    text: `${users.name} is an Admin Now!`,
                    icon:'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

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
                            <th>Name</th>
                            <th>Email</th>
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
                                    <td>{item.email}</td>
                                    <td>
                                        {item.role === "admin" ? 'Admin' : <button onClick={() => handleMakeAdmin(item)} className=' btn'><RiAdminLine /></button>}
                                        <button onClick={() => handleDeleteCart(item._id)} className=' btn btn-error ml-3'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
