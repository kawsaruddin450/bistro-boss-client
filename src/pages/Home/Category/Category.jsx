import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper max-w-screen-lg mx-auto my-12"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h4 className='text-3xl -mt-16 text-center font-bold uppercase text-white shadow-xl'>Salads</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h4 className='text-3xl -mt-16 text-center font-bold uppercase text-white shadow-xl'>Pizzas</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h4 className='text-3xl -mt-16 text-center font-bold uppercase text-white shadow-xl'>Soups</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h4 className='text-3xl -mt-16 text-center font-bold uppercase text-white shadow-xl'>Deserts</h4>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h4 className='text-3xl -mt-16 text-center font-bold uppercase text-white shadow-xl'>Salads</h4>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Category;