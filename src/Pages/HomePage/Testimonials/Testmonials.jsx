import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SectionTitle from '../Categorys/SectionTitle';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


export default function Testmonials() {

    const [review, setReview] = useState([])

    useEffect(() => {
        fetch('review.json')
            .then(response => response.json())
            .then(data => setReview(data))
    }, [])



    return (
        <>
            <div className=' mt-20'>
                <SectionTitle
                    subHeading={" What Our Clint Say "}
                    heading={" testimonials "}
                />
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        review.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="text-center w-6/12 mx-auto my-20">
                                    <p className=' text-2xl font-bold text-blue-600'>{item.name}</p>
                                    <p className=' text-center my-5 flex justify-center'>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={item.rating}
                                            readOnly
                                        />
                                    </p>
                                    <span className=' text-md'>{item.details}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </>
    )
}
