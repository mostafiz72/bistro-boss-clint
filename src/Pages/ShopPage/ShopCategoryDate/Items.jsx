import React from 'react'
import useAuth from '../../../Hooks/useAuth/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useCart from '../../../Hooks/useCart';

export default function Items({ cartItems }) {
    const { image, name, price, recipe, _id } = cartItems;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCart();

    const handleAddToCart = (item) => {
        if (user && user.email) {
            const cartItem = {
                menuId: _id,
                email: user.email,
                name: name,
                image: image,
                price: price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "center center",
                            icon: "success",
                            title: ` ${name} added cart`,
                            showConfirmButton: false,
                            timer: 1000
                        });
                        refetch();  //// kono ekta cart korar por data base k auto reload kore updated data ta show korai-----------
                    }
                })
        }

        else {
            Swal.fire({
                title: "Your are not Logged In",
                text: "Please login to add to the cart ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login"
            }).then((result) => {
                if (result.isConfirmed) {
                    //    send the user login pages
                    navigate("/login", { state: { from: location } })
                }
            });
        }
    }

    return (
        <>
            {/* <div className=' flex justify-between items-center my-10'>
                <span className=' text-2xl font-bold'>Total Foods Items ({cartItems.length})</span>
                <button disabled={!item.length} className=' btn btn-primary font-semibold text-xl'>Sort By Price</button>
            </div> */}
            <div>
                <div className="card card-compact bg-base-100 shadow-xl">
                    <figure>
                        <img className=' w-full object-cover'
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{name}</h2>
                        <p>{recipe}</p>
                        <p className=' text-xl font-bold text-yellow-500 my-5'>$ {price}</p>
                        <div className="card-actions justify-end">
                            <button onClick={() => handleAddToCart(cartItems)} className="btn btn-info border-0 border-b-4 bg-transparent text-white w-full">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
