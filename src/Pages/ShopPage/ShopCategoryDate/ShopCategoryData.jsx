import React from 'react'
import { Link } from 'react-router-dom';
import Items from './Items';

export default function ShopCategoryData({ item }) {

    const handleAddToCart = id => {
        console.log(id);

    }

    return (
        <>
            <div className=' flex justify-between items-center my-10'>
                <span className=' text-2xl font-bold'>Total Foods Items ({item.length})</span>
                <button disabled={!item.length} className=' btn btn-primary font-semibold text-xl'>Sort By Price</button>
            </div>
            <div className=' grid grid-cols-3 gap-10 mb-20'>
                {
                    item.map(data => <Items key={data._id} cartItems={data} />)
                }
            </div>
        </>
    )
}
