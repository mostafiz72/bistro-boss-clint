import React, { useEffect, useState } from 'react'
import SectionTitle from '../Categorys/SectionTitle'
import UseMenu from '../../../Hooks/MenuItems/UseMenu'
import MenuCategory from '../../MenuCategory/MenuCategory';

export default function MenuBar() {
         const [ menu ] = UseMenu();
         
        const popular = menu.filter(item => item.category === "popular")
        

    return (
        <>
            <SectionTitle
                heading={"popular items"}
                subHeading={"from Our menu"}


            />
            <MenuCategory itemName={popular} />
        </>
    )
}
