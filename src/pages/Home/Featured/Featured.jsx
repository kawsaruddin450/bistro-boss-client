import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg';
import Button from "../../../components/Button/Button";
import './Featured.css';


const Featured = () => {
    return (
        <div className="featured bg-fixed">
            <div className="bg-slate-950 bg-opacity-60 py-[130px]">
                <SectionTitle
                    heading={"From our menu"}
                    subHeading={"Check it out"}
                ></SectionTitle>
                <div className="flex max-w-screen-lg mx-auto gap-16 items-center mt-12">
                    <div>
                        <img src={featuredImg} className="rounded-lg w-full" alt="" />
                    </div>
                    <div className="space-y-3">
                        <p className="text-xl">March 20, 2023</p>
                        <p className="text-xl">WHERE CAN I GET SOME?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <Button>Read More</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;