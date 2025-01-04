import React, { useContext, useState } from 'react'
import { IoMdClose } from 'react-icons/io';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { MdLogout } from 'react-icons/md';
import { FaOpencart, FaRegUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProviders/AuthProvider';
import useCart from '../../Hooks/useCart';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'

export default function Navbar() {

  const [show, setShow] = useState(false);
  const { user, signOutUser } = useContext(AuthContext);
  const location = useLocation();
  const [cart] = useCart();

  const handleSignOut = () => {
    signOutUser()
    // toast.warning("Logged Out!");

  }

  //   const handleHiddenShowing = () => {
  //     setShow(!show);
  //   }

  return (
    <>
      <div className={`sticky top-0 z-50 bg-gray-800`} >
        <div className={`bg-gray-800 font-semibold absolute top-0 -left-80 min-h-screen duration-200 w-80 z-50 p-4 ${show && "left-[0px]"} ${!show ? "-left-80" : ""}`}>
          <button className=' absolute top-1 -right-2 w-10 h-10 rounded-full text-red-600 text-2xl'><IoMdClose /></button>
          <nav>
            <ul className=' flex flex-col items-start gap-5 mt-5'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/allmovives">All Movie</NavLink></li>
              {/* {user && user.email? <li><NavLink to="/addmovies">Add Movie</NavLink></li> : ""}
                {user && user.email? <li><NavLink to="/favoritesmovies">My Favorite</NavLink></li> : ""} */}
              <li><NavLink to="/extraone">Present Movie</NavLink></li>
              <li><NavLink to="/extratwo">Movie Shotting</NavLink></li>
            </ul>
          </nav>
        </div>

        {/* responsive site navbar end here now */}

        <nav className=' flex justify-between items-center text-lg font-semibold w-11/12 md:container mx-auto py-5'>
          {/* <button onClick={handleHiddenShowing} className=' font-bold text-2xl cursor-pointer md:hidden'><FaBarsStaggered /></button> */}
          <Link to="/" className=' font-bold text-xl md:text-2xl cursor-pointer hidden md:block'>Bistro Boss</Link>
          {/* ekhane bola hoyse jodi user er mordhe kicu thake ta hole tumi amake tar nam ta show koro na hole error deyo na */}
          <div className=' hidden lg:block'>
            <ul className=' flex items-center gap-8'>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/allmovives">Contact Us</NavLink></li>
              {/* {user && user.email? <li><NavLink to="/addmovies">Add Movie</NavLink></li>: ''}
            {user && user.email ? <li><NavLink to="/favoritesmovies">My Favorites</NavLink></li> : ''} */}
              {<li><NavLink to="/extraone">Dashboard</NavLink></li>}
              {<li><NavLink to="/menu">Our Menu</NavLink></li>}
              {<li><NavLink to="/order/salad">Our Shop</NavLink></li>}
              {<li><NavLink to="/admin">Delivary</NavLink></li>}
              <li className=' mb-6'><NavLink to="/carts">
                <div className="badge badge-secondary">+{cart.length}</div>
              <FaOpencart />
              </NavLink></li>
            </ul>
          </div>
          <div className=' flex items-center gap-5'>
            <div className=' cursor-pointer'>
              <div>
                {/* {<img className=' w-10 h-10 rounded-full object-cover' src='' alt="" />} */}
              </div>
              {user && user.email ? <img className=' w-10 h-10 rounded-full' src={user.photoURL} alt="" /> : <span className=' text-4xl'><FaRegUserCircle /></span>}
            </div>
            {
              user && user.email ?
                <button onClick={handleSignOut} className=' btn btn-error cursor-pointer'><MdLogout />Log-Out</button>
                :
                <div className=' flex justify-center items-center gap-3'>
                  <div><Link to="/login" className=' btn btn-accent cursor-pointer'>Login</Link></div>
                  <div><Link to="/register" className=' btn btn-success cursor-pointer text-white'>Register</Link></div>
                  {
                    location.pathname === "/" && <div>
                      <label className="swap swap-rotate">
                        {/* this hidden checkbox controls the state */}
                        <input type="checkbox" className="theme-controller" value="synthwave" />

                        {/* sun icon */}
                        <svg
                          onClick={() => setDark(!dark)}
                          className="swap-off h-10 w-10 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24">
                          <path
                            d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                        </svg>

                        {/* moon icon */}
                        <svg
                          onClick={() => setDark(!dark)}
                          className="swap-on h-10 w-10 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24">
                          <path
                            d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                        </svg>
                      </label>
                    </div>
                  }
                </div>
            }
            {/* <div><Link to="/login" className=' btn btn-info cursor-pointer text-white'>Log-In</Link></div>
                 <div><Link to="/register" className=' btn btn-primary cursor-pointer text-white'>Register</Link></div> */}
          </div>
        </nav>
      </div>
    </>
  )
}