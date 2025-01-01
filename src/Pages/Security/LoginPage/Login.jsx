import Lottie from 'lottie-react';
import React, { useContext, useState } from 'react'
import { FaGoogle } from 'react-icons/fa';
import { IoMdClose, IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LoginLottile from '../../../assets/Lotti/Login.json'
// import { AuthContext } from '../Context/AuthContext/AuthProvider';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import LoginGoogle from '../GoogleLogin/LoginGoogle';
// import axios from 'axios';

export default function Login() {

    const Navigate = useNavigate();
    const location = useLocation();
    const from = location.state || "/";


    // const { SignInUser, setUser } = useContext(AuthContext)
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the login logic
        const form = new FormData(e.target);  // Nutun vabe input form thek data neuya jai ta amara dekhalam
        const email = form.get("email");
        const password = form.get("password");
        // console.log({ email, password })

        // SignInUser(email, password)
        //     .then(result => {
        //         // setUser(result.user);
        //         toast.success("Login Success");
        //         /// if jodin user sunnces then create jsob web tokens-----------
        //         const users = { email: email };
        //         axios.post("http://localhost:5000/jwt", users, {
        //             withCredentials: true  // ai j qequest ta jassche Cookize a sei tumi allow kore dau and cookie te save korar permition dei /// ami backend er kono kicu pathonor permition dei.
        //         })
        //             .then(res => {
        //                 console.log(res.data);

        //             })

        //         // setTimeout(()=>{
        //         //     Navigate(from);
        //         // }, 3000)
        //     })
        //     .catch(error => {
        //         toast.error("Something went wrong " + error.message)
        //     })
    }


    return (
        <>
            {/* <ToastContainer position="top-center" /> */}
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left md:w-3/6">
                        <Lottie animationData={LoginLottile}></Lottie>
                    </div>
                    <div className=" bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="bg-base-100 w-full max-w-xl shrink-0 shadow-2xl relative">
                            <h2 className=' text-center font-bold  text-2xl mt-5'>Login From</h2>
                            <Link to="/" className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-red-400 text-2xl'><IoMdClose /></Link>
                            <form onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                                    <button onClick={handleShow} className=' text-xl absolute top-[52px] right-5'>{show ? <IoMdEye /> : <IoMdEyeOff />}</button>
                                    <label className="label">
                                        <Link to="/forget" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className="form-control flex flex-col justify-center w-full">
                                    <p className=' text-right mb-3 font-semibold'>Don't Have An Account ? <Link to="/register" className="text-red-500 hover:underline">Register</Link></p>
                                    <button className="btn btn-primary">Login</button>
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