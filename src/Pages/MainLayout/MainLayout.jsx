import React from 'react'
import Navbar from '../../Components/Navabar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'

export default function MainLayout() {

    const location = useLocation();
    console.log(location);
    

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
