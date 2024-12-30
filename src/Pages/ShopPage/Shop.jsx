import React, { useState } from 'react'
import Cover from '../OurMenu/CoverBanner/Cover'
import CoverImg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseMenu from '../../Hooks/MenuItems/UseMenu';
import ShopCategoryData from './ShopCategoryDate/shopCategoryData';
import { useParams } from 'react-router-dom';

export default function Shop() {
    const categories = ["salad", "pizza", "dessert", "soup", "drinks"]
    const { category } = useParams();
    const initalIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initalIndex);
    const [menu] = UseMenu();

    const salad = menu.filter(item => item.category === "salad")
    const offered = menu.filter(item => item.category === "offered")
    const dessert = menu.filter(item => item.category === "dessert")
    const drinks = menu.filter(item => item.category === "drinks")
    const pizza = menu.filter(item => item.category === "pizza")
    const soup = menu.filter(item => item.category === "soup")

    return (
        <>
            <Cover img={CoverImg} title={"our shop"} />
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Offerd</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                </TabList>
                <TabPanel>
                    <ShopCategoryData item={salad} />
                </TabPanel>
                <TabPanel>
                    <ShopCategoryData item={offered} />
                </TabPanel>
                <TabPanel>
                    <ShopCategoryData item={dessert} />
                </TabPanel>
                <TabPanel>
                    <ShopCategoryData item={drinks} />
                </TabPanel>
                <TabPanel>
                    <ShopCategoryData item={pizza} />
                </TabPanel>
                <TabPanel>
                    <ShopCategoryData item={soup} />
                </TabPanel>
            </Tabs>
        </>
    )
}
