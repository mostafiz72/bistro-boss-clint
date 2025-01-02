import React from 'react'

export default function Items({cartItems}) {
    const { image, name, price, recipe } = cartItems;

    const handleAddToCart = (item) => {
        console.log(item);
        
    }
    
    return (
        <>
            {/* <div className=' flex justify-between items-center my-10'>
                <span className=' text-2xl font-bold'>Total Foods Items ({cartItems.length})</span>
                <button disabled={!item.length} className=' btn btn-primary font-semibold text-xl'>Sort By Price</button>
            </div> */}
            <div>
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img className=' w-full object-cover'
                                    src={image}
                                    alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">{name}</h2>
                                <p>{recipe}</p>
                                <p className=' text-xl font-bold text-yellow-500 my-5'>$ {price}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => handleAddToCart(cartItems)} className="btn btn-info border-0 border-b-4 bg-transparent text-white w-full">Buy Now</button>
                                </div>
                            </div>
                        </div>
            </div>
        </>
    )
}
