import React from 'react'
import { Helmet } from 'react-helmet'
import Cover from './CoverBanner/Cover'
import CoverImg from '../../assets/home/banner.jpg'
import CoverImg2 from '../../assets/home/featured.jpg'
import CoverImg3 from '../../assets/home/06.png'
import CoverImg4 from '../../assets/home/05.png'
import MenuBar from '../HomePage/MenuBar/MenuBar'

export default function Menu() {
    return (
        <>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <Cover img={CoverImg} title={"Orderd foods"} />
            <div className=' my-20'>
                <MenuBar />
                <div className=' flex justify-center items-center'>
                    <button className=' uppercase btn btn-info border-0 border-b-4 bg-transparent text-white'>Order Your Favourite food</button>
                </div>
            </div>
            <Cover img={CoverImg2} title={"our favorites foods"} />
            <div className=' my-20'>
                <MenuBar />
                <div className=' flex justify-center items-center'>
                    <button className=' uppercase btn btn-info border-0 border-b-4 bg-transparent text-white'>Order Your Favourite food</button>
                </div>
            </div>
            <Cover img={CoverImg3} title={"best 30% discound offer"} />
            <div className=' my-20'>
                <MenuBar />
                <div className=' flex justify-center items-center'>
                    <button className=' uppercase btn btn-info border-0 border-b-4 bg-transparent text-white'>Order Your Favourite food</button>
                </div>
            </div>
            <Cover img={CoverImg4} title={"best 50% discound offer"} />
            <div className=' my-20'>
                <MenuBar />
                <div className=' flex justify-center items-center'>
                    <button className=' uppercase btn btn-info border-0 border-b-4 bg-transparent text-white'>Order Your Favourite food</button>
                </div>
            </div>
        </>
    )
}
