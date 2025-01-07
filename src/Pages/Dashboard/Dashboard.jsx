import React from 'react'
import { BiSolidBarChartAlt2 } from 'react-icons/bi'
import { FaBars, FaCartArrowDown, FaShoppingBag, FaSwatchbook } from 'react-icons/fa'
import { GrContactInfo } from 'react-icons/gr'
import { HiUserGroup } from 'react-icons/hi'
import { IoHomeSharp } from 'react-icons/io5'
import { NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
      <div className=' container mx-auto flex gap-10'>
        <div className=' w-80 bg-[#D6904B] text-gray-800 p-5 h-screen'>
        <h2 className=' text-3xl font-semibold text-center mb-5'>Admin Panel</h2>
          <ul className=' flex flex-col gap-3'>
            <li className=' flex gap-3 justify-start btn btn-info text-left items-center'><IoHomeSharp />
              <NavLink to="/home">User Home</NavLink>
            </li>
            <li  className=' flex gap-3 justify-start btn btn-info text-left items-center'>
            <HiUserGroup />
              <NavLink>Reservation</NavLink>
            </li>
            <li  className=' flex gap-3 justify-start btn btn-info text-left items-center'><BiSolidBarChartAlt2 />
              <NavLink>Payment History</NavLink>
            </li>
            <li  className=' flex gap-3 justify-start btn btn-info text-left items-center'><FaCartArrowDown />
              <NavLink>My Cart</NavLink>
            </li>
            <li  className=' flex gap-3 justify-start btn btn-info text-left items-center'><FaSwatchbook />
              <NavLink>My Booking</NavLink>
            </li>
          </ul>
          <div className="divider divider-start">Start</div>
          <ul className='  flex flex-col gap-3'>
            <li  className=' flex gap-3 justify-start btn btn-info text-left items-center'><IoHomeSharp />
              <NavLink>Home</NavLink>
            </li>
            <li  className=' flex gap-3 justify-start btn btn-info text-left items-center'><FaBars />
              <NavLink>Menu</NavLink>
            </li>
            <li  className=' flex gap-3 justify-start btn btn-info text-left items-center'>
            <FaShoppingBag />
              <NavLink>shop</NavLink>
            </li>
            <li  className=' flex gap-3 justify-start btn btn-info text-left items-center'><GrContactInfo /> <NavLink>Cotact</NavLink></li>
          </ul>
        </div>
        <div className=' flex-1'><Outlet /></div>
      </div>
    </>
  )
}
