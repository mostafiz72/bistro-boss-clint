import React, { useEffect, useState } from 'react'
import SectionTitle from '../Categorys/SectionTitle'

export default function MenuBar() {

    const [data, setData] = useState([])


    useEffect(() => {
        fetch('menu.json')
            .then(response => response.json())
            .then(data => {
                const popular = data.filter(item => item.category === "popular")
                setData(popular)
            })
    }, [])

    return (
        <>
            <SectionTitle
                heading={"popular items"}
                subHeading={"from Our menu"}


            />

            <div className='  grid grid-cols-2 my-20 gap-20'>
                {
                    data.map(item => (
                        <div key={item.id} className=" flex justify-between">
                            <div className=' flex gap-5 items-center'>
                                <img className=' w-36 rounded-tr-full rounded-br-full rounded-bl-full' src={item.image} alt={item.name} />
                                <div>
                                    <h3 className=' text-lg font-bold text-green-500'>{item.name}</h3>
                                    <p className=' w-80'>{item.recipe}</p>
                                </div>
                            </div>
                            <span className=' text-yellow-500 font-semibold'>${item.price}</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}