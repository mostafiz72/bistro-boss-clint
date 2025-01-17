import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react'
import { FaGoogle } from 'react-icons/fa';
import { IoMdClose, IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import RegisterLottile from '../../../assets/Lotti/Register.json'
import Projapoti from '../../../assets/Lotti/projapoti.json'
import { AuthContext } from '../../../AuthProviders/AuthProvider';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
import SocialLogin from '../../../Components/SocialLogin/SocialLogin';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import LoginGoogle from '../GoogleLogin/LoginGoogle';

export default function Register() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();


    const onSubmit = data => {
        console.log(data);

        signUpUser(data.email, data.password, data.name, data.photo)
            .then(result => {
                setUser(result.user);
                console.log(result.user);
                updataprofile({ displayName: data.name, photoURL: data.photo })
                    .then(res => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }

                        axiosPublic.post("/users", userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    Swal.fire({
                                        title: "Registration Successful",
                                        text: "You have successfully registered",
                                        icon: "success",
                                        confirmButtonText: false,
                                        showConfirmButton: false,
                                        timer: 3000
                                    })
                                    Navigate("/")
                                }
                            })

                    })
                    .catch(err => {
                        console.log(err.message);
                    })
            })
            .catch(error => {
                // toast.error("Something went wrong " + error.message)
                console.log(error.message);

            })
    }

    const Navigate = useNavigate();

    const { signUpUser, setUser, updataprofile } = useContext(AuthContext)
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return (
        <>
            {/* <ToastContainer position="top-center" /> */}
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-4/12">
                        <Lottie animationData={RegisterLottile}></Lottie>
                    </div>
                    <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="bg-base-100 w-full max-w-xl shrink-0 shadow-2xl relative">
                            <h2 className=' text-center font-bold  text-2xl mt-5'>Register From</h2>
                            <Link to="/" className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-red-400 text-2xl'><IoMdClose /></Link>
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input name='name' {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" required />
                                    {errors.name && <span className=' text-red-500'>name is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">photo URL</span>
                                    </label>
                                    <input name='photo' {...register("photo", { required: true })} type="text" placeholder="Enter your photo url" className="input input-bordered" />
                                    {errors.photo && <span className=' text-red-500'>photo url is required</span>}
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                    {errors.email && <span className=' text-red-500'>email is required</span>}
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? "text" : "password"}
                                        {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 8
                                        })} name='password' placeholder="password" className="input input-bordered" />
                                    {errors.password?.type === 'required' && <span className=' text-red-500'>password is required</span>}
                                    {errors.password?.type === 'minLength' && <span className=' text-red-500'>password min must be 6 carectars</span>}
                                    {errors.password?.type === 'maxLength' && <span className=' text-red-500'>password max must be 8 carectars</span>}

                                    <button onClick={handleShow} className=' text-xl absolute top-[52px] right-5'>{show ? <IoMdEyeOff /> : <IoMdEye />}</button>
                                    <label className="label">
                                        <Link to="/forget" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control flex flex-col justify-center w-full">
                                    <p className=' text-right mb-3 font-semibold'>Already Have An Account ? <Link to="/login" className="text-red-500 hover:underline">Login</Link></p>
                                    <input type="submit" value="Register" className="btn btn-primary" />
                                    <div className="divider"></div>
                                    <SocialLogin />
                                    {/* <LoginGoogle /> */}
                                    {/* <span className=' text-xl my-3 text-center'>or</span> */}
                                    {/* <button onClick={handleLoginWithGoogle} className=' btn btn-accent'> <span className=' text-yellow-400 text-lg'><FaGoogle /></span> Login Wtih Google</button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}