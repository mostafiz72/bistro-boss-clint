import React from 'react'
import { Helmet } from 'react-helmet'
import Cover from './CoverBanner/Cover'
import CoverImg from '../../assets/home/banner.jpg'
import dessertbg from '../../assets/menu/dessert-bg.jpeg'
import saladbg from '../../assets/menu/salad-bg.jpg'
import soupbg from '../../assets/menu/soup-bg.jpg'
import CoverImg4 from '../../assets/menu/pizza-bg.jpg'
import UseMenu from '../../Hooks/MenuItems/UseMenu'
import MenuCategory from '../MenuCategory/MenuCategory'
import SectionTitle from '../HomePage/Categorys/SectionTitle'

export default function Menu() {

    const [menu] = UseMenu();

    const salad = menu.filter(item => item.category === "salad")
    const offered = menu.filter(item => item.category === "offered")
    const dessert = menu.filter(item => item.category === "dessert")
    const drinks = menu.filter(item => item.category === "drinks")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")

    return (
        <>
            <Helmet><title>Bistro Boss | Menu</title></Helmet>
            <div className=' mb-20'>
            <Cover img={CoverImg} title={"OUR MENU"} />
            </div>
            <SectionTitle
                heading={"Don't miss"}
                subHeading={"today's offer"}


            />
            <MenuCategory itemName={salad} ></MenuCategory>
            <Cover img={saladbg} title={"salad"} />
            <MenuCategory itemName={offered} ></MenuCategory>
            <Cover img={CoverImg} title={"offered"} />
            <MenuCategory itemName={dessert} ></MenuCategory>
            <Cover img={dessertbg} title={"dessert"} />
            <MenuCategory itemName={drinks} ></MenuCategory>
            <Cover img={soupbg} title={"drinks"} />
            <MenuCategory itemName={pizza} ></MenuCategory>
            <Cover img={CoverImg4} title={"pizza"} />
            <MenuCategory itemName={soup} ></MenuCategory>
        </>
    )
}
