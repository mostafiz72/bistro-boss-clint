import React from 'react'
import { Link } from 'react-router-dom';

export default function ShopCategoryData({ item }) {

    return (
        <>
                <div className=' flex justify-between items-center my-10'>
                    <span className=' text-2xl font-bold'>Total Foods Items ({item.length})</span>
                    <button disabled={!item.length} className=' btn btn-primary font-semibold text-xl'>Sort By Price</button>
                </div>
            <div className=' grid grid-cols-3 gap-10 mb-20'>
                {
                    item.map(data => (
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img className=' w-full object-cover'
                                    src={data.image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2>
                                <p>{data.recipe}</p>
                                <p className=' text-xl font-bold text-yellow-500 my-5'>$ {data.price}</p>
                                <div className="card-actions justify-end">
                                    <Link to={`/order/${data.title}`} className="btn btn-info border-0 border-b-4 bg-transparent text-white w-full">Buy Now</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
