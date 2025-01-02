import Lottie from 'lottie-react';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { FaGoogle } from 'react-icons/fa';
import { IoMdClose, IoMdEye, IoMdEyeOff } from 'react-icons/io'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import LoginLottile from '../../../assets/Lotti/Login.json'
import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import LoginGoogle from '../GoogleLogin/LoginGoogle';
// import axios from 'axios';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../../AuthProviders/AuthProvider';

export default function Login() {
    
    const location = useLocation();
    const Navigate = useNavigate();
    let from = location.state?.from?.pathname || '/'

    const { SignInUser, setUser } = useContext(AuthContext)


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

        SignInUser(email, password)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
                toast.success("Login Success");

                setTimeout(()=>{
                    Navigate(from);
                }, 3000)
            })
            .catch(error => {
                // toast.error("Something went wrong " + error.message)
                console.log(error.message);
                
            })
    }

    /// useing the capcah code in -----------------

    useEffect(()=>{
            loadCaptchaEnginge(6); 
    }, [])


    /// Validate captcha  ---------------

    const [ desiable, setDesiable ] = useState(true);

    const handleCaptcha = (e) => {
        e.preventDefault();

        const capcah = e.target.value;
      
        if(validateCaptcha(capcah)){
          setDesiable(false);
        }
        else{
            setDesiable(true);
        }

        capcah.value = "";
        
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
                        <div className="bg-white rounded-md w-full max-w-xl shrink-0 shadow-2xl relative">
                            <h2 className=' text-center font-bold  text-2xl mt-5'>Login From</h2>
                            <Link to="/" className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-red-400 text-2xl'><IoMdClose /></Link>
                            <form onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input name='email' type="email" placeholder="email" className="input input-bordered bg-white" required />
                                </div>
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type={show ? "text" : "password"} name='password' placeholder="password" className=" bg-white input input-bordered" required />
                                    <button onClick={handleShow} className=' text-xl absolute top-[52px] right-5'>{show ? <IoMdEye /> : <IoMdEyeOff />}</button>
                                    <label className="label">
                                        <Link to="/forget" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                                </div>
                                {/* useing the capcha in react simple capcha */}
                                <div className="form-control relative">
                                    <label className="label">
                                        <span className="label-text capcha"><LoadCanvasTemplate /></span>
                                    </label>
                                    <input onBlur={handleCaptcha} type='text' name='capcha' placeholder="Type ovd capcha" className="input input-bordered bg-white" />
                                   
                                </div>

                                {/* end  the capcha code in react simple capcha */}

                                <div className="form-control flex flex-col justify-center w-full">
                                    <p className=' text-right mb-3 font-semibold'>Don't Have An Account ? <Link to="/register" className="text-red-500 hover:underline">Register</Link></p>
                                    <button disabled={desiable} className="btn btn-primary">Login</button>
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