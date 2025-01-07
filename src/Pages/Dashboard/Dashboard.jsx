import React from 'react'
import { BiSolidBarChartAlt2 } from 'react-icons/bi'
import { FaBars, FaCartArrowDown, FaShoppingBag, FaSwatchbook } from 'react-icons/fa'
import { GrContactInfo } from 'react-icons/gr'
import { HiUserGroup } from 'react-icons/hi'
import { IoHomeSharp } from 'react-icons/io5'
import { MdContactPhone } from 'react-icons/md'
import { NavLink, Outlet } from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
      <div className=' container mx-auto flex gap-10'>
        <div className=' w-80 bg-[#05030f] text-gray-800 p-5 h-screen'>
          <h2 className=' text-3xl font-semibold text-center mb-5 text-slate-400'>Admin Panel</h2>
          <ul className=' flex flex-col gap-3'>
            <li className=' flex gap-3 justify-start btn  text-left items-center'><IoHomeSharp />
              <NavLink to="/home">User Home</NavLink>
            </li>
            <li className=' flex gap-3 justify-start btn  text-left items-center'>
              <HiUserGroup />
              <NavLink to='reservation'>Reservation</NavLink>
            </li>
            <li className=' flex gap-3 justify-start btn  text-left items-center'><BiSolidBarChartAlt2 />
              <NavLink to="/payment">Payment History</NavLink>
            </li>
            <li className=' flex gap-3 justify-start btn  text-left items-center'><FaCartArrowDown />
              <NavLink to="/mycart">My Cart</NavLink>
            </li>
            <li className=' flex gap-3 justify-start btn  text-left items-center'><FaSwatchbook />
              <NavLink to="/booking">My Booking</NavLink>
            </li>
          </ul>
          <div className="divider divider-start"></div>
          <ul className='  flex flex-col gap-3'>
            <li className=' flex gap-3 justify-start btn  text-left items-center'><IoHomeSharp />
              <NavLink to="/adminhome">Home</NavLink>
            </li>
            <li className=' flex gap-3 justify-start btn  text-left items-center'><FaBars />
              <NavLink to="menu">Menu</NavLink>
            </li>
            <li className=' flex gap-3 justify-start btn  text-left items-center'>
              <FaShoppingBag />
              <NavLink to="shop">Shop</NavLink>
            </li>
            <li className=' flex gap-3 justify-start btn  text-left items-center'><MdContactPhone /> <NavLink to="/contact">Cotact</NavLink></li>
          </ul>
        </div>
        <div className=' flex-1 items-center py-5 flex flex-col'><Outlet /></div>
      </div>
    </>
  )
}
