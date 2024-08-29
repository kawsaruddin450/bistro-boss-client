import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from "../../../assets/menu/banner3.jpg"
import dessertBg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaBg from "../../../assets/menu/pizza-bg.jpg";
import soupBg from "../../../assets/menu/soup-bg.jpg"
import saladBg from "../../../assets/menu/salad-bg.jpg"
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import MenuCategory from "../MenuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === "offered");
    const dessert = menu.filter(item => item.category === "dessert");
    const pizza = menu.filter(item => item.category === "pizza");
    const salad = menu.filter(item => item.category === "salad");
    const soup = menu.filter(item => item.category === "soup");
    return (
        <div>
            <Helmet>
                <title>Menu - Bistro Boss Resturant</title>
            </Helmet>
            {/* Offered */}
            <div>
                <Cover img={menuBg} title={"Our Menu"}></Cover>
                <div className="my-32 max-w-screen-lg mx-auto">
                    <SectionTitle heading={"today's offer"} subHeading={"Don't Miss"}></SectionTitle>
                    <MenuCategory items={offered} title={"offered"}></MenuCategory>
                </div>
            </div>
            {/* desert */}
            <div>
                <Cover title={"desserts"} img={dessertBg}></Cover>
                <div className="my-32 max-w-screen-lg mx-auto">
                    <MenuCategory items={dessert} title={"dessert"}></MenuCategory>
                </div>
            </div>
            {/* pizza */}
            <div>
                <Cover title={"pizzas"} img={pizzaBg}></Cover>
                <div className="my-32 max-w-screen-lg mx-auto">
                    <MenuCategory items={pizza} title={"pizza"}></MenuCategory>
                </div>
            </div>
            {/* soup */}
            <div>
                <Cover title={"soups"} img={soupBg}></Cover>
                <div className="my-32 max-w-screen-lg mx-auto">
                    <MenuCategory items={soup} title={"soup"}></MenuCategory>
                </div>
            </div>
            {/* salads */}
            <div>
                <Cover title={"salads"} img={saladBg}></Cover>
                <div className="my-32 max-w-screen-lg mx-auto">
                    <MenuCategory items={salad} title={"salad"}></MenuCategory>
                </div>
            </div>
        </div>
    );
};

export default Menu;