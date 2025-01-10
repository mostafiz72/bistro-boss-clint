import React from 'react'
import SectionTitle from '../../../HomePage/Categorys/SectionTitle'
import { useForm } from 'react-hook-form'
import { FaUtensils } from 'react-icons/fa'
import useAxiosPublic from '../../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

 const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
 const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`
export default function AddUser() {

    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async(data) => {
        console.log(data)
        const imageFile = { image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'  // only image uploaded file use korale headers user korte hobe 
            }
        })
        if(res?.data?.success){  // now send the menu item data to the server with the image url ------------
           const menuItem = {
            name: data.name,
            recipe: data.recipe,
            image: res.data.data.display_url,
            category: data.category,
            price: parseFloat(data.price)
           }
           // send the data in the server -----------
           const menuRes = await axiosSecure.post("/menu", menuItem);
           console.log(menuRes);

           if(menuRes.data.insertedId){
            reset();
            Swal.fire({
                position: "center center",
                icon: "success",
                title: "New Recipe Added Success",
                showConfirmButton: false,
                timer: 1500
              });
           }
        }
        console.log("Uploaded success image", res.data);
        
    }


    return (
        <>
            <SectionTitle heading={"this is heading.."} subHeading={"this is sub heading..."} />

            <form className=' w-full p-10 mt-5' onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Recipe Name <span className=' text-red-500'>*</span></span>
                    </div>
                    <input {...register("name", {required: true})} type="text" placeholder="Recipe name" className="input input-bordered w-full" required />
                </label>

                {/* select category && price */}
                <div className=' flex gap-6 my-6'>
                    <div className=' w-full'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Select a category</span>
                            </div>
                            <select defaultValue="default" {...register("category", {require: true})} className="select select-bordered" required >
                                <option disabled value="default">Select Category</option>
                                <option value="salad">Salad</option>
                                <option value="offered">Offerd</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                            </select>
                        </label>
                    </div>
                    <div className=' w-full'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price<span className=' text-red-500'>*</span></span>
                            </div>
                            <input {...register("price", {require: true})} type="number" placeholder="price" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>

                {/* textareas */}

                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Recipe Details<span className=' text-red-500'>*</span></span>
                    </div>
                    <textarea {...register("recipe", {require: true})} className="textarea textarea-bordered h-48" placeholder="Recipe Details"></textarea>
                </label>
                <div>
                <input {...register("image", {require: true})} type="file" className="file-input w-full mt-6" required />
                </div>
                <div className=' mt-5'>
                    <button className="btn btn-info">Add Items <FaUtensils></FaUtensils></button>
                </div>
            </form>

        </>
    )
}
