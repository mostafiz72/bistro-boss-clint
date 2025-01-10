import React from 'react'
import SectionTitle from '../../../HomePage/Categorys/SectionTitle'
import UseMenu from '../../../../Hooks/MenuItems/UseMenu'
import { FaRegEdit } from 'react-icons/fa';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

export default function ManageItems() {
    const [menu, refetch] = UseMenu();
    const axiosSecure = useAxiosSecure();

    /// Edit the menu items -----------------

    const handleEdit = item => {
        console.log(item);
        
    }

    // Delete the menu items ----------------

    const handleDelete = item => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount > 0) {
                    refetch();
                        Swal.fire({
                            position: "center center",
                            icon: "success",
                            title: `${item.name} has been Deleted `,
                            showConfirmButton: false,
                            timer: 1500
                        });
                }
            }
        });

    }

    return (
        <>
            <SectionTitle heading={"manage all items"} subHeading={"Hurry Up!"} />

            {/* items cart manageing starting */}

            <div className="overflow-x-auto w-full px-10 mt-20">
                <h2 className=' text-2xl font-semibold'>Total Items: ({menu.length})</h2>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Items Image</th>
                            <th>Items Name</th>
                            <th>Items Price</th>
                            <th>Managing</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            menu.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{item.name}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        <button onClick={() => handleEdit(item)} className=' btn btn-warning'><FaRegEdit /></button>
                                        <button onClick={() => handleDelete(item)} className=' btn btn-error ml-10'>Delete</button>
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
