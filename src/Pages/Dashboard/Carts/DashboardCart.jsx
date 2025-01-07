import React from 'react'
import useAuth from '../../../Hooks/useAuth/useAuth'
import useCart from '../../../Hooks/useCart'
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

export default function DashboardCart() {

  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDeleteCart = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }

          })
      }
    });

  }

  return (
    <>
      <div className="overflow-x-auto w-full px-10">
        <h2 className=' text-2xl font-semibold'>Total Items: ({cart.length})</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Items Image</th>
              <th>Items Name</th>
              <th>Items Price</th>
              <th>Items Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              cart.map((item, index) => (
                <tr>
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
                  <td><button onClick={() => handleDeleteCart(item._id)} className=' btn btn-error'>Delete</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <h2 className=' text-2xl font-semibold'>Total price = ${totalPrice}</h2>
      </div>
    </>
  )
}
