import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import swiper1 from '../../../assets/home/slide1.jpg';
import swiper2 from '../../../assets/home/slide2.jpg';
import swiper3 from '../../../assets/home/slide3.jpg';
import swiper4 from '../../../assets/home/slide4.jpg';
import swiper5 from '../../../assets/home/slide5.jpg';
import SectionTitle from './SectionTitle';


// import required modules

export default function Category() {
    return (
        <>
            <div className=' my-40'>
                <SectionTitle
                    heading={"this is a category heading"}
                    subHeading={"this is a category description"}
                />
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper text-white mt-20"
                >
                    <SwiperSlide>
                        <img className=' w-full' src={swiper1} alt="" />
                        <h3 className=' -mt-48 text-2xl text-center pb-5 font-semibold'>Salad</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className=' w-full' src={swiper2} alt="" />
                        <h3 className=' -mt-48 text-2xl text-center font-semibold'>Salad</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className=' w-full' src={swiper3} alt="" />
                        <h3 className=' -mt-48 text-2xl text-center font-semibold'>Salad</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className=' w-full' src={swiper4} alt="" />
                        <h3 className=' -mt-48 text-2xl text-center font-semibold'>Salad</h3>
                    </SwiperSlide>

                    <SwiperSlide>
                        <img className=' w-full' src={swiper5} alt="" />
                        <h3 className=' -mt-48 text-2xl text-center font-semibold'>Salad</h3>
                    </SwiperSlide>

                </Swiper>
            </div>
        </>
    )
}
