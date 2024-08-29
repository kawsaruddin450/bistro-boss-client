import { Helmet } from "react-helmet-async";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import ContactSection from "../ContactSection/ContactSection";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home - Bistro Boss Resturant</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <ContactSection></ContactSection>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;