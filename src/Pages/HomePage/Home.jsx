import React from 'react'
import Banner from './Banner/Banner'
import Category from './Categorys/Category'
import MenuBar from './MenuBar/MenuBar'
import FetureItems from './FetureItems/FetureItems'
import Testmonials from './Testimonials/Testmonials'
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
    <Helmet>
      <title>Bistro Boss | Home</title>
      <meta name="description" content="Welcome to our website" />
    </Helmet>
    <Banner />
    <Category />
    <MenuBar />
    <FetureItems />
    <Testmonials />
    </>
  )
}
