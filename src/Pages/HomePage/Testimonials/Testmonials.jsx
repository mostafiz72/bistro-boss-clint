
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import SectionTitle from '../Categorys/SectionTitle';


export default function Testmonials() {
    return (
        <>
            <div>
                <SectionTitle
                    subHeading={"What Our Clint Say"}
                    heading={"testimonials"}
                />

                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={true}
                    autoplay={true}
                    infinityLoop={true}
                    mousewheel={true}
                    interval={3000}
                    keyboard={true}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <h2>this is main page here now</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2>this is main page here now</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2>this is main page here now</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2>this is main page here now</h2>
                    </SwiperSlide>
                    <SwiperSlide>
                        <h2>this is main page here now</h2>
                    </SwiperSlide>
                </Swiper>

            </div>
        </>
    )
}
