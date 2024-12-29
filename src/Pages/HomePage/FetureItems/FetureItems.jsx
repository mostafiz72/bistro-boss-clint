import React from 'react'
import SectionTitle from '../Categorys/SectionTitle'
import fetureImg from '../../../assets/home/featured.jpg'
import '../../../Pages/HomePage/FetureItems/featured.css'

export default function FetureItems() {
    return (
        <>
            <div className="featured-img p-28">
                    <SectionTitle
                        subHeading={"Check Out"}
                        heading={"featured item"}
                    />
                <div className=' flex justify-between items-center gap-10 mt-20'>
                    <div>
                        <img className=' rounded-xl' src={fetureImg} alt="" />
                    </div>
                    <div>
                        <p className=' text-white font-semibold'>Agu 20, 2029</p>
                        <h3 className=' text-xl font-bold text-white'>Where can i get some?</h3>
                        <p className=' text-md font-semibold text-white my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, provident quae, assumenda minima aspernatur esse doloribus natus pariatur cupiditate, eum ea debitis ut! Culpa ut provident, expedita quo repudiandae officia illum assumenda recusandae? Maxime exercitationem laboriosam temporibus, enim provident dolore ullam explicabo, dolorum, aperiam dignissimos quidem suscipit rem reprehenderit ducimus?</p>
                        <button className=' btn btn-info text-white bg-transparent border-0 border-b-4'>Order Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}
