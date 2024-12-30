import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuCategory({ itemName }) {

    return (
        <>
            <div className='  grid grid-cols-2 my-20 gap-20'>
                {
                    itemName.map(item => (
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
