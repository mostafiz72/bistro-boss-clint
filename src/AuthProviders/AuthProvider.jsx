import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../Firebase/firebase.config';
const auth = getAuth(app);
export const AuthContext = createContext(null)
const provider = new GoogleAuthProvider();

export default function AuthProvider( { children } ) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dark, setDark] = useState(false);
  // const [ userEmail, setUserEmail ] = useState("");
  // console.log(user);
  

  /// Sign up user in forms useing ----------------------------

  const signUpUser = ( email, password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // Sign In user useing firebase ----------------------

  const SignInUser = (email, password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

  /// signUp with google functionality starting ------------------------------

   const signUpWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
   }

   /// SingOut user functionality starting ------------------------------

   const signOutUser = () => {
     setLoading(true);
    return signOut(auth);
   }

      // SignUp and Updata User Info functionality start here now******************************

      const updataprofile = (updatedData)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, updatedData)
       }

   const authInfo= {
    user,
    setUser,
    loading,
    setLoading,
    signUpWithGoogle,
    signOutUser,
    dark,
    setDark,
    signUpUser,
    SignInUser,
    updataprofile
   }


   useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{
      setUser(currentuser)
      setLoading(false);
    })
    return ()=>{
      setUser(unsubscribe);
    }
   }, [])

  return (
    <>
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    </>
  )
}
