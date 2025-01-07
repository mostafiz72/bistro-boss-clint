import React, { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../../AuthProviders/AuthProvider'
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

export default function SocialLogin() {

    const { signUpWithGoogle } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const handleSignIn = () =>{
        signUpWithGoogle()
        .then(result => {
             const userInfo = {
                 email: result.user.email,
                 name: result.user.displayName
             }

             axiosPublic.post('/users', userInfo)
                .then(response => {
                    navigate('/')
                 })
                .catch(error => {
                   console.error(error.response.data)
                 })
 
        })
    }

  return (
    <>
    <button onClick={handleSignIn} className=' btn btn-accent'><FaGoogle /> SignUP with Google</button>
    </>
  )
}
