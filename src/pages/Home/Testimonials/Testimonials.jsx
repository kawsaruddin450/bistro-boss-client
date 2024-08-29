import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className="max-w-screen-lg mx-auto my-32">
            <SectionTitle
                heading={"testimonials"}
                subHeading={"What Our Clients Say"}
            ></SectionTitle>

            <div className="my-12">
                <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide
                            key={review._id}
                        >
                            <div className="text-center">
                                <Rating
                                    style={{ maxWidth: 180, textAlign: "center", margin: "0 auto" }}
                                    value={review.rating}
                                    readOnly
                                />
                                <p className="text-6xl font-bold mx-auto my-12"><FaQuoteLeft className="mx-auto"></FaQuoteLeft></p>
                                <p className="mx-16">{review.details}</p>
                                <h2 className="text-3xl text-yellow-400 font-medium mt-4">{review.name}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;