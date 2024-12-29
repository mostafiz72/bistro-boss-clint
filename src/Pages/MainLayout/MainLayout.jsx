import React from 'react'
import Navbar from '../../Components/Navabar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

export default function MainLayout() {
    return (
        <>
            <Navbar />
            <div className=' container mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </>
    )
}
